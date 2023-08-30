import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GokuComponent } from './goku/goku.component';
import { GohanComponent } from './gohan/gohan.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GokuComponent, GohanComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
