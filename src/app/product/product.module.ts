import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent,
         ProductListComponent,
         ProductListItemComponent
 } from './components';
import { ProductComponent } from './pages/product.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductListItemComponent
  ],
})
export class ProductModule { }
