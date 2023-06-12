import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Auth } from '../../../models/Auth.model';
import { User } from '../../../models/User.model';
import { TokenService } from '../../../shared/service/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/api/auth`;
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(email: string, password: string) {
    return this.http
      .post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.access_token);
        })
      );
  }
  getProfile() {
    // el HttpHeaders funciona de forma similar a HttpParams
    // const headers = new HttpHeaders();
    // hacerlo de esta forma nos permite ser más flexibles a la hora de manejar la información
    // headers.set('Authorization', `Bearer ${token}`);
    // return this.http.get<User>(`${this.apiUrl}/profile`, {
    //   // headers:{
    //   //   Authorization:`Bearer ${token}`,
    //   //   // 'Content-type':'application/json'
    //   // }
    //   // headers,
    // });
    // return this.http.get<User>(`${this.apiUrl}/profile`)
    return this.http
      .get<User>(`${this.apiUrl}/profile`)
      // tap nos permite que cuando hago una acción envie una unica vez la acción
      .pipe(tap((user) => this.user.next(user)));
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password).pipe(switchMap(() => this.getProfile()));
  }

  logout() {
    this.tokenService.removeToken();
  }
}
