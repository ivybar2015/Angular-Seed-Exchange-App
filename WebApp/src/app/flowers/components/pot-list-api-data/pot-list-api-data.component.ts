import { Component, OnInit } from '@angular/core';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { PotService } from 'src/app/services/pots.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pot-list-api-data',
  templateUrl: './pot-list-api-data.component.html',
  styleUrls: ['./pot-list-api-data.component.scss']
})
export class PotListApiDataComponent implements OnInit {
  // declare variable wtih any type
  obsSubscribe: any;
  datArray: any;

  //// 'PotService' is class name from flower.sevices.ts file in  services folder
  constructor(private potSVC: PotService ) { }

  ngOnInit() {
    // getFlowerList() method  from flower.services.ts file in services folder
    this.obsSubscribe = this.potSVC. getList()
    .subscribe((result) => {

    // 'data' is  declared from web api in [Route("getall")] of product data table
    this.datArray = result.data;
    console.log('Data Returned from API ', this.datArray);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
  }

