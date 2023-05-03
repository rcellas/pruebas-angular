import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/Products.model';

import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = []
  limit = 10;
  offset = 0;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getAllProduct(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
  }

  onLoadMore(){
    this.productService
    .getProductByPage(this.limit, this.offset)
    .subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}
