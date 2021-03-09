// APP.MODULE.TS file already BOOTSTRAPS  our app components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
// FORMmODULE FOR GETTING INPUT
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// use class of angular module by define @ngModule decorator
@NgModule({

  // declarations array
  declarations: [
    AppComponent,
    WelcomeComponent],

  // import array, MODULE HERE
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  // providers ARRAY
  providers: [],

  // BOOTSTRAP ARRAY
  bootstrap: [AppComponent],

  schemas: [NO_ERRORS_SCHEMA],
})
// CLASS
export class AppModule { }
