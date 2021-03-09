
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UserListComponent } from './../user-list/user-list.component';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit, OnDestroy {
  // 'childListComp' can be  name anything
  // have to put {static: false}

  @ViewChild(UserListComponent, {static: false}) childListComp: UserListComponent;
  @ViewChild(UserEditFormComponent, {static: false}) childEditFormComp: UserEditFormComponent;
  showEditForm: boolean;
  showCreateForm: boolean;
  userId: string;

  constructor() { }
 // 'event' can be name any thing

 onEditRecord(id: any) {
   console.log('From Parent ', id);
   this.userId = id;
   this.showEditForm = true;
   this.showCreateForm = false;
   this.childEditFormComp.onLoadEditForm(this.userId);
   // this.childEditFormComp.onLoadEditTest();
 }

 fromChildFormActionChange($event: any) {
    console.log('From Parent ', $event);
    if ($event === true) {

      // let to call child component funtion reload()
      this.childListComp.reload();
    }
  }

  ngOnInit() {
    this.showEditForm = false;
    this.showCreateForm = true;

  }


  ngOnDestroy(): void {

  }

}
