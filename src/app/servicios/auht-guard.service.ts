import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuhtGuardService implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService,
    public router:Router
      ) {}

  canActivate(): boolean {
    if(this.authenticationService.isLoggedIn){
      /* console.log('esta logiado', this.authenticationService.isLoggedIn); */
      return this.authenticationService.isLoggedIn;
    }
    else {
      /* console.log('esta logiado', this.authenticationService.isLoggedIn); */
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}