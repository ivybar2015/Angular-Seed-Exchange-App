import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'title-button',
  templateUrl: './title-button.component.html',
  styleUrls: ['./title-button.component.scss']
})
export class TitleButtonComponent implements OnInit {

  // use iput funtion to declared variable
  @Input() title: string;
  // NUmbers string all properties up top
//////////////////////////////////////
  constructor() { }


  // Funtions at the bottom
  public onAlert(): void {
    // use this to get valiable
    alert('Clicked ' + this.title);
  }

  ngOnInit() {
  }

}
