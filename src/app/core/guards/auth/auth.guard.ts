import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { TokenService } from '../../../shared/service/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private authService : AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const token = this.tokenService.getToken()
    // if(!token){
    //   this.router.navigate(['/'])
    //   return false
    // }
    // return true

    //con observador y vamos a vigilar su estado en caso de tener usuario devolveremos usuario
    // en caso negativo no permitirá la entrada
    return this.authService.user$.pipe(
      map(user=>{
        if(!user){
          this.router.navigate(['/home'])
          return false
        }
        return true
      })
    )
  }

}
