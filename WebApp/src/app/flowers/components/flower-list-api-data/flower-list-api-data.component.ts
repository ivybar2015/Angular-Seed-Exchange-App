import { FlowersService } from './../../../services/flowers.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-flower-list-api-data',
  templateUrl: './flower-list-api-data.component.html',
  styleUrls: ['./flower-list-api-data.component.scss']
})
export class FlowerListApiDataComponent implements OnInit, OnDestroy {

  // declare variable name with type any
  obsSubscribe: any;
  dataArr: any;

  // 'FlowersService' is class name from flower.sevices.ts file in  services folder
  constructor(private flowerSVC: FlowersService) { }


  ngOnInit() {
    // getFlowerList() method  from flower.services.ts file in services folder
    this.obsSubscribe = this.flowerSVC.getFlowerList()
    .subscribe((result) => {

    // 'data' is  declared from web api in [Route("getall")] of product data table
    this.dataArr = result.data;
    console.log('Data Returned from API ', this.dataArr);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
// TO CLOSE SUBCRIBE
  ngOnDestroy() {
    if (this.obsSubscribe) {
      this.obsSubscribe.unsubscribe();
    }
  }

}
