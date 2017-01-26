import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

import { AvatarsContainerComponent } from './avatars-container/avatars-container.component';
import { AvatarCardComponent } from './avatar-card/avatar-card.component';

@Component({
  selector: 'signup',
  templateUrl: 'app/authentication/signup/signup.template.html',
  styleUrls: [ 'app/authentication/signup/signup.style.css' ]
})
export class SignupComponent {
  errorMessage: string;
  user: any = {};
  avatars: any[];
  avatar: any;

  constructor (private _authenticationService: AuthenticationService, private _router: Router) {
    this.avatar = { id: 0, src: '/resources/imgs/avatar-0.png' };

    this.avatars = [
      {id: 0, src: '/resources/imgs/avatar-0.png' },
      {id: 1, src: '/resources/imgs/avatar-1.png'},
      {id: 2, src: '/resources/imgs/avatar-2.png'},
      {id: 3, src: '/resources/imgs/avatar-3.png'},
      {id: 4, src: '/resources/imgs/avatar-4.png'},
      {id: 5, src: '/resources/imgs/avatar-5.png'},
      {id: 6, src: '/resources/imgs/avatar-6.png'},
      {id: 7, src: '/resources/imgs/avatar-7.png'},
      {id: 8, src: '/resources/imgs/avatar-8.png'},
      {id: 9, src: '/resources/imgs/avatar-9.png'},
      {id: 10, src: '/resources/imgs/avatar-10.png'}
    ];

    this.user.avatar = this.avatar.id;
  }

  signup() {
    this._authenticationService.signup(this.user)
        .subscribe(result  => this._router.navigate(['/home']),
        error =>  this.errorMessage = error);
  }

  changeAvatar(selectedAvatar: any) {
    this.avatar = {
      id: selectedAvatar.id,
      src: selectedAvatar.imgSrc
    };

    this.user.avatar = this.avatar.id;
  }
}