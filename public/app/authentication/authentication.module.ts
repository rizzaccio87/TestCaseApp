import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CarouselModule } from 'primeng/primeng';

import { AuthenticationRoutes } from './authentication.routes';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AvatarsContainerComponent } from './signup/avatars-container/avatars-container.component';
import { AvatarCardComponent } from './signup/avatar-card/avatar-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    SharedModule,
    CarouselModule
  ],
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    AvatarsContainerComponent,
    AvatarCardComponent
  ]
})
export class AuthenticationModule {}