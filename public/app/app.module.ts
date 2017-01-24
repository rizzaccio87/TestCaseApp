import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { AuthenticationModule  } from './authentication/authentication.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuard } from './authentication/authentication.guard';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AuthenticationModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [ AppComponent ],
  providers: [ AuthenticationService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }