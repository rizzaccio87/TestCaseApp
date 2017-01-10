import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.template.html'
})
export class HomeComponent implements OnInit {
  private items: MenuItem[];

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