import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'vesgetable',
  templateUrl: './vesgetable.component.html',
  styleUrls: ['./vesgetable.component.scss']
})
export class VesgetableComponent implements OnInit {
  showVeg: boolean;
  showFlower: boolean;
  btnVeg: string;
  btnFlower: string;
  isBtnFlower: boolean;
  constructor() { }

  showVegies() {
    this.showVeg = true;
    this.showFlower = false;
    this.btnVeg = 'primary';
    this.btnFlower = '';

  }

  showFlowers() {
    this.showVeg = false;
    this.showFlower = true;
    this.btnVeg = '';
    this.btnFlower = 'primary';
  }

  ngOnInit() {
    this.showFlower = false;
    this.showVeg = true;
    this.btnVeg = 'primary';
    this.btnFlower = '';
    this.isBtnFlower = true;

  }

}
