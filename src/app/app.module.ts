import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { HasilComponent } from './hasil/hasil.component';
import {Routes, RouterModule} from '@angular/router';
const ROUTES:Routes = [
  {path:'input', component : InputComponent},
  {path:'hasil', component : HasilComponent},
  {path:'hasil/:has', component : HasilComponent},
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, InputComponent, HasilComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
