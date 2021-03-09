import { Component, OnInit } from '@angular/core';

// @Component is component decorater
@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
