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
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
