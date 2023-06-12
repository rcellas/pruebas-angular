import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/timeAgo/timeAgo.pipe';
import { HightlightDirective } from './directives/hightlight/hightlight.directive';
import { TimeInitPipe } from './pipes/timeInit/time-init.pipe';

import { ProductsComponent } from '../product/components/products/products.component';
import { ImgComponent } from './components/img/img.component';
import { ProductItemsComponent } from '../product/components/product-items/product-items.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ImgComponent,
    ProductItemsComponent,
    ReversePipe,
    TimeAgoPipe,
    HightlightDirective,
    TimeInitPipe,
    ProductsComponent,
  ],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports:[
    ImgComponent,
    ProductItemsComponent,
    ReversePipe,
    TimeAgoPipe,
    HightlightDirective,
    TimeInitPipe,
    ProductsComponent,
  ]
})
export class SharedModule {}
