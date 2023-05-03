import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Auth } from '../models/Auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(private http: HttpClient, private tokenService:TokenService) {}

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password })
    .pipe(tap(response=>{this.tokenService.saveToken(response.access_token)}));
  }
  profile() {
    // el HttpHeaders funciona de forma similar a HttpParams
    // const headers = new HttpHeaders();
    // hacerlo de esta forma nos permite ser más flexibles a la hora de manejar la información
    // headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/profile`, {
      // headers:{
      //   Authorization:`Bearer ${token}`,
      //   // 'Content-type':'application/json'
      // }
      // headers,
    });
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(rta => this.profile()),
    )
  }
}
