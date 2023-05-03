import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product, CreateProductDTO } from '../../models/Products.model';
import { ProductService } from '../../service/product.service';

import { StoreService } from 'src/app/service/store.service';
import { switchMap, zip } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent{
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter;
  widthImg = 10;
  myShoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  };
  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productService: ProductService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.toggleProductDetail();
        this.productChosen = data;
        this.statusDetail = 'success';
      },
      (error) => {
        console.error(error);
        this.statusDetail = 'error';
      }
    );
  }

  // esto es para unir diferentes request
  readAndUpdate(id: string) {
    this.productService
      .getProduct(id)
      .pipe(
        switchMap((product) => {
          return this.productService.update(product.id, { title: 'change' });
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
      this.productService.fetchReadAndUpdate(id,{title:'change'})
      // .subscribe((response) => {
      //   const read = response[0];
      //   const update = response[1];
      // });

  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo prodcuto',
      description: 'bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2,
    };
    this.productService.create(product).subscribe((data) => {
      this.products.unshift(data);
    });
  }

  updateProduct() {
    const changes = {
      title: 'nuevo titulo',
    };
    const id = this.productChosen.id;
    this.productService.update(id, changes).subscribe((data) => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products[productIndex] = data;
      this.productChosen = data;
    });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChosen.id
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  onLoadMore() {
    this.loadMore.emit()
  }
}
