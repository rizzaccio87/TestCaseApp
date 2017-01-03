import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, InputTextModule ],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }