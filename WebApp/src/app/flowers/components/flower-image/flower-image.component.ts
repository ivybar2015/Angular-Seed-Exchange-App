import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'flower-image',
  templateUrl: './flower-image.component.html',
  styleUrls: ['./flower-image.component.scss']
})
export class FlowerImageComponent implements OnInit {
  @Input() imagePath: any;

  constructor() { }



  ngOnInit() {

  }

}
