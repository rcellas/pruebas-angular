import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/Products.model';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent {
  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description:'',
    category: {
      id: '',
      name: ''
    }
  }
  @Output() addedProduct = new EventEmitter<Product>()
  @Output() showProduct = new EventEmitter<string>()

  addCart(){
    this.addedProduct.emit(this.product)
  }
  onShowDetail(){
    this.showProduct.emit(this.product.id)
  }
}
