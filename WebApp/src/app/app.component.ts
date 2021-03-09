// NEED IMPORT Component FROM @angular/core TO ALLOW DECORATOR USED IT
import { Component } from '@angular/core';

// @Component is component decorater, decorateris a funtion
@Component({
  selector: 'app-root',  // use selector to directive name used in HTML IN INDEX.HTML FILE
  templateUrl: './app.component.html',  // use templateUrl to define url of our HTML file
})

// used 'export' to ensure that other part of the application can use this class "AppComponent"
export class AppComponent {

  // property
  title = 'firstApp';
}
