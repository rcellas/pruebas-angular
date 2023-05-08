import { Injectable } from '@angular/core';
// los rxjs es la libreria encargada de traer todos los observables que nos
// servirán para que haga toda la gestion de los cambios de estado
// esta libreria estará presente en formularios, peticiones http

// el BehaviorSubject nos servirá para definir el patron y así permitir que cuando
// haga un cambio responderá al instante
import {BehaviorSubject} from 'rxjs'

import { Product } from '../models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private myShoppingCart:Product[]=[];
  private myCart = new BehaviorSubject<Product[]>([]);
  // si vemos que al final de la palabra tiene un simbolo de $ significa que es un observable
  // myCart$ transmitira en su nueva forma los cambios realizados
  myCart$ = this.myCart.asObservable()
  total= 0


  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }
  getShoppingCart(){
    return this.myShoppingCart;
  }
  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum,item)=>sum+item.price, 0)
  }
}
