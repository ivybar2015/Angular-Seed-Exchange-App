import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

// assess the folders
const routes: Routes = [
  // path of connect flower and auth folders
  {  path: '', component: WelcomeComponent },
  { path: 'flowers', loadChildren: () => import('./flowers/flowers.module').then(m => m.FlowersModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
