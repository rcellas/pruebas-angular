import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormLoginComponent } from './ui/form-login/form-login.component';
import { ImgComponent } from './ui/img/img.component';

import { HeaderComponent } from './ui/header/header.component';
import { ReversePipe } from './global/pipes/reverse.pipe';
import { TimeAgoPipe } from './global/pipes/timeAgo/timeAgo.pipe';
import { HightlightDirective } from './global/directives/hightlight/hightlight.directive';
import { TimeInitPipe } from './global/pipes/timeInit/time-init.pipe';
import { CarruselComponent } from './ui/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    ImgComponent,
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
