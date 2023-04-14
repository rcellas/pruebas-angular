import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ProductListItemComponent {
  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: ''
    }
  }
  @Output() addedProduct = new EventEmitter<Product>()
  @Output() showProduct = new EventEmitter<string>()

  addCart() {
    this.addedProduct.emit(this.product)
  }
  onShowDetail() {
    this.showProduct.emit(this.product.id)
  }
}
