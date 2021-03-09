import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { RegistrationListApiDataComponent } from './registration-list-api-data/registration-list-api-data.component';

import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { UserEditFormComponent } from './user/user-edit-form/user-edit-form.component';



const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-web-api', component: RegistrationListApiDataComponent },
  { path: 'user-profile', component: UserLayoutComponent },
  { path: 'edit', component: UserEditFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
