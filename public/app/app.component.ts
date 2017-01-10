import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mean-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private router: Router) {}
}