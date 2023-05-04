import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import { StoreService } from '../../service/store.service';

import { User } from 'src/app/models/user.model';
import { CategoriesService } from 'src/app/service/categories.service';
import { Category } from 'src/app/models/categories.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private AuthService: AuthService,
    private categoriesService: CategoriesService
  ) {}
  ngOnInit() {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategory();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.AuthService.loginAndGet('sebas@mail.com', '1212').subscribe((user) => {
      this.profile = user;
    });
  }

  getAllCategory() {
    this.categoriesService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  // getProfile() {
  //   this.AuthService.profile().subscribe((user) => {
  //     this.profile = user
  //   });
  // }
}
