import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token:string){
    localStorage.setItem('token', token);
  }

  getToken(){
    //para el tema de localStorage es importante tener esta parte claro
    const token = localStorage.getItem('token');
    return token
  }
}
