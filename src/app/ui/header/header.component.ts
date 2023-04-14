import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../product/services/store.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  counter = 0
  constructor(
    private storeService: StoreService
  ) { }
  ngOnInit() {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
