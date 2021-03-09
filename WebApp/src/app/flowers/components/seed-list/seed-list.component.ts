import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.scss']
})
export class SeedListComponent implements OnInit {

  //  building dictionary
  public seddArr = [
    {
      id: 1,
      name: 'Kale',
      cost: 4.00,
      color: 'Green',
      image: './../../assets/images/imgseed/kale.jpg'
    },
    {
      id: 2,
      name: 'Water bitter',
      cost: 7.00,
      color: 'Green',
      image: './../../../assets/images/imgseed/water bitter.jpg'

    },
    {
      id: 3,
      name: 'Water spinach',
      cost: 9.00,
      color: 'Green',
      image: './../../../assets/images/imgseed/water spinach.jpg'

    }];
    ///////////////////////////////////////
  constructor() { }


  ngOnInit() {
  }

}
