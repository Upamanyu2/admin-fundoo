import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private myRoute: Router) { 
  }
  isLoggedIn() {     //function to check whether the token is present or not if present then ok or else dashboard will not be redirected.
    return localStorage.getItem("token")!==null;
  }  
}
