import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
 
@Injectable()
export class AuthGuard implements CanActivate {
    user: any;
 
    constructor(private router: Router, private _authService: AuthenticationService) {
        this.user = _authService.user;
     }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('CanActivate: ' + this.user);
        if (this._authService.user) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/authentication/signin']);
        return false;
    }
}