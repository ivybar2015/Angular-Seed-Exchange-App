import { FlowersService } from './../../../services/flowers.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss']
})
// for cycle hook component add "implements OnInit"

export class FlowerListComponent implements OnInit {
  ////////////////////////////
  // array of diction name flowerArr, flower-list.component.html will get property of flowerArr
  public flowerArr = [
    { // propertis
      id: 1,
      name: 'Rose',
      cost: 10.00,
      color: 'Red',
      image: './../../assets/images/imgflower/red-roses.jpg'
    },
    {
      id: 2,
      name: 'Violet',
      cost: 12.00,
      color: 'purple',
      image: './../../../assets/images/imgflower/violet.jpg'

    },
    {
      id: 3,
      name: 'Tulip',
      cost: 14.00,
      color: 'prink',
      image: './../../../assets/images/imgflower/tulips.jpg'

    }];
  obsSubscribe: any;
  dataArr: any;
/////////////////////////////////
  constructor(private flowerSVC: FlowersService) { }

  ngOnInit() {

  }

}
