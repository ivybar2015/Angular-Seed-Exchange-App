import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  @Output() actionEditRecord = new EventEmitter();
  subs = new Subscription();
  dataArr: any;
  userId: number;
  showEditForm: boolean;
  showCreateForm: boolean;

  // AuthService from service folder
  constructor(private authSVC: AuthService, private router: Router) { }

  // it is a number
  onEdit(id: number) {
  // View the id from the console window
    console.log('Edit ID ', id);
    this.actionEditRecord.emit(id);

  }

  reload() {
    /// "result" can be name any thing
    this.subs.add(this.authSVC.getAuthList().subscribe((result) => {
    // "data" varanble name same as web Api
    // "dataArr" will pass to html for the output
    this.dataArr = result.data;
    console.log('Data Returned from API ', this.dataArr);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    }));
  }


  ngOnInit() {
    this.subs.add(this.authSVC.getAuthList().subscribe((result) => {
    // 'database' is  declared from web api in [Route("getall")] of product data table
     // View the data from the console window
    this.dataArr = result.data;
    console.log('Data Returned from API ', this.dataArr);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    }));

  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
