import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService,
    public router:Router
      ) {}

  canActivate(): boolean {
    //si esta logiado no puede entrar
    if(this.authenticationService.isLoggedIn){
      this.router.navigate(['/home']);
      return false;
    }
    else {
      
      return true;
    }
    
  }
}