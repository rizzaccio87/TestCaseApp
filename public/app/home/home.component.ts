import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.template.html'
})
export class HomeComponent implements OnInit {
  private items: MenuItem[];
  private user: any;

  constructor (private _authenticationService: AuthenticationService) {
    this.user = _authenticationService.user;
  }

  ngOnInit() {
      this.items = [{
        label: 'Dashboard',
        icon: 'fa-dashboard',
        routerLink: ['/home/dashboard']
      },
      {
        label: 'Customers',
        icon: 'fa-users',
        routerLink: ['/home/customers']
      },
      {
          label: 'Query',
          items: [
              {label: 'New', icon: 'fa-plus', routerLink: ['/home/query']}
          ]
      }];
  }
}