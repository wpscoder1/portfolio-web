import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule ,
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]

 
})
export class ControlFormModule { 
  
}
