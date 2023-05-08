import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import { StoreService } from '../../../service/store.service';

import { User } from '../../../models/User.model';
import { CategoriesService } from 'src/app/service/categories.service';
import { Category } from 'src/app/models/Categories.model';
import { Route, Router } from '@angular/router';
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
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategory();
    this.AuthService.user$.subscribe(data=>{this.profile =data})
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.AuthService.loginAndGet('admin@mail.com', 'admin123').subscribe(() => {
      this.router.navigate(['/profile'])
    });
  }

  logout(){
    this.AuthService.logout()
    this.profile = null
    this.router.navigate(['/home'])

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
