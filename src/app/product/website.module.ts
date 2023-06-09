import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormLoginComponent } from './components/form-login/form-login.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CarruselComponent } from '../shared/components/carrusel/carrusel.component';

import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoryModule } from './pages/category/category.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    FormLoginComponent,
    HeaderComponent,
    CarruselComponent,
    HomeComponent,
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
    SharedModule,
    CategoryModule,
    QuicklinkModule
  ],
})
export class WebsiteModule {}
