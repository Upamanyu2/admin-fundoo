import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor( private myRoute: Router, private auth: AuthService){}
  canActivate(    //linked with auth service to check whether the user is stil logged in or not
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggedIn()){
        return true;
      }
      else{ //else the person will be redirected to login page by default.
        this.myRoute.navigate(["admin-login"]);
        return false;
      }
  }
}
