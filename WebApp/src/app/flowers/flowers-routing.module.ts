import { PotListApiDataComponent } from './components/pot-list-api-data/pot-list-api-data.component';
import { SeedListComponent } from './components/seed-list/seed-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowersComponent } from './flowers.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { VesgetableComponent } from './components/vesgetable/vesgetable.component';
import { FlowerListApiDataComponent } from './components/flower-list-api-data/flower-list-api-data.component';


const routes: Routes = [
  // '' ,shop, seed .... is  ROUTE name of URL
  { path: '', component: FlowersComponent },
  { path: 'shop', component: MainLayoutComponent },
  { path: 'seed', component: SeedListComponent },
  { path: 'vesgatble', component: VesgetableComponent },
  { path: 'flower-web-api', component: FlowerListApiDataComponent },
  { path: 'pot-web-api', component: PotListApiDataComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }
