import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {StoreService} from '../../service/store.service';

import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  showMenu = false;
  counter= 0
  profile: User | null = null;
  constructor(
    private storeService:StoreService,
    private AuthService:AuthService,
    private UserService:UsersService
  ){}
  ngOnInit(){
    this.storeService.myCart$.subscribe(products=>{
      this.counter = products.length;
    })
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.AuthService.loginAndGet('sebas@mail.com', '1212').subscribe((user) => {
      this.profile = user;
    });
  }

  // getProfile() {
  //   this.AuthService.profile().subscribe((user) => {
  //     this.profile = user
  //   });
  // }
}
