import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'registration-list-api-data',
  templateUrl: './registration-list-api-data.component.html',
  styleUrls: ['./registration-list-api-data.component.scss']
})
export class RegistrationListApiDataComponent implements OnInit, OnDestroy {
  obsSubscribe: any;
  dataArr: any;

  constructor(private authSVC: AuthService) { }

  ngOnInit() {

    // getAuthList() metohd is from auth.services.ts in services folder
    this.obsSubscribe = this.authSVC.getAuthList()
    .subscribe((result) => {
    // database var is from web api in [Route("getuser")] of produc data table
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
