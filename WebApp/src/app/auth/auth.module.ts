import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationListApiDataComponent } from './registration-list-api-data/registration-list-api-data.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditFormComponent } from './user/user-edit-form/user-edit-form.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationListApiDataComponent,
    UserLayoutComponent,
    UserFormComponent,
    UserListComponent,
    UserEditFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    FormsModule,
    ReactiveFormsModule


  ]
})
export class AuthModule { }
