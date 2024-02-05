import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { AdminsRoutingModule } from './admins-routing-module';
import {  RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    //  RouterModule,
    CommonModule,
    FormsModule,
    AdminsRoutingModule,
    
    HttpClientModule,
    
    
  ],
  // exports: []
})
export class AdminsModule { }
