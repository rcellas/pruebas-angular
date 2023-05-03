import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
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
import { TimeInterceptor } from './interceptor/time.interceptor';
import { TokenInterceptor } from './interceptor/token.interceptor';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
