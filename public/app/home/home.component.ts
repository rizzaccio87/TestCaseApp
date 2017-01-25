import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import * as materialLite from '@mdl';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.template.html',
  styleUrls: ['./app/home/home.style.css']
})
export class HomeComponent implements OnInit {
  private user: any;

  constructor (private _authenticationService: AuthenticationService, private router: Router) {
    this.user = _authenticationService.user;

    // register to route changes
    router.events.subscribe(() => {
        // ..and run the MDL script to augment all new controls Angular has rendered
        materialLite.componentHandler.upgradeAllRegistered();
    });
  }

  ngOnInit() { }
}