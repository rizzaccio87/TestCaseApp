import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/home/dashboard/dashboard.template.html',
  styleUrls: ['app/home/dashboard/dashboard.style.css']
})
export class DashboardComponent {
  user: any;

  constructor (private _authenticationService: AuthenticationService) {
		this.user = _authenticationService.user;
	}
 }