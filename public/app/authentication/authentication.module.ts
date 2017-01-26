import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'primeng/primeng';

import { AuthenticationRoutes } from './authentication.routes';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// move to shared module
import { ModalComponent } from './modal/modal.component';
import { OpenWithDirective } from './modal/open-with.directive';
import { AvatarsContainerComponent } from './signup/avatars-container/avatars-container.component';
import { AvatarCardComponent } from './signup/avatar-card/avatar-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    CarouselModule
  ],
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    ModalComponent,
    OpenWithDirective,
    AvatarsContainerComponent,
    AvatarCardComponent
  ]
})
export class AuthenticationModule {}