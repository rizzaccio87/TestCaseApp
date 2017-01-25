import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'user-profile',
    templateUrl: './app/home/shell/profile.template.html',
    styleUrls: ['./app/home/shell/profile.style.css']
})
export class UserProfileComponent {
    user: any;

    constructor(private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }
}