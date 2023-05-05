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
import { ProductsComponent } from './website/components/products/products.component';
import { FormLoginComponent } from './website/components/form-login/form-login.component';
import { ImgComponent } from './website/components/img/img.component';
import { ProductItemsComponent } from './website/components/product-items/product-items.component';
import { HeaderComponent } from './website/components/header/header.component';
import { ReversePipe } from './website/pipes/reverse.pipe';
import { TimeAgoPipe } from './website/pipes/timeAgo/timeAgo.pipe';
import { HightlightDirective } from './website/directives/hightlight/hightlight.directive';
import { TimeInitPipe } from './website/pipes/timeInit/time-init.pipe';
import { CarruselComponent } from './website/components/carrusel/carrusel.component';
import { TimeInterceptor } from './interceptor/time.interceptor';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';

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
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
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
