import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ImgComponent } from './components/img/img.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { HeaderComponent } from './components/header/header.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/timeAgo/timeAgo.pipe';
import { HightlightDirective } from './directives/hightlight/hightlight.directive';
import { TimeInitPipe } from './pipes/timeInit/time-init.pipe';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FormLoginComponent,
    ImgComponent,
    ProductItemsComponent,
    HeaderComponent,
    ReversePipe,
    TimeAgoPipe,
    HightlightDirective,
    TimeInitPipe,
    CarruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
