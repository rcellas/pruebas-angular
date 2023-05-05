import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';

import { HomeComponent } from './pages/home/home.component';

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

import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
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
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    SwiperModule,
  ]
})
export class WebsiteModule { }
