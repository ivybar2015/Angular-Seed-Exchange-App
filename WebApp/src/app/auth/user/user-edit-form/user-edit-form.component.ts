import {  Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit , OnDestroy {

///  @Output() actionChange = new EventEmitter();

  subs = new Subscription();
  userArray: any;
  dataForm: any;
  result: any;

  constructor( private fb: FormBuilder,
               private userSVC: AuthService  ) { }

    // private snackBar: MatSnackBar,

  userForm = this.fb.group({
    UserName: [null, [Validators.required, Validators.minLength(2)]],
    FirstName: [null, [Validators.required, Validators.minLength(2)]],
    LastName: [null, [Validators.required, Validators.minLength(3)]],
  });

  onSubmit(): void {
    // "data' variable can be name any
    //   this.subs.add(this.userSVC.addNewUser(this.userForm).subscribe((data) => {
    //   console.log('Create Message: ', data);
    //   this.actionChange.emit(true);
    // },
    // (err: HttpErrorResponse) => {
    //   console.log(err);
    // }));
  }


  onLoadEditTest() {
    console.log('Edit Form');
  }

  onLoadEditForm(id: any) {
    console.log('Edit Form ', id);
    this.subs.add(this.userSVC.getSingleUserProfile(id).subscribe((data) => {
      console.log('Edit Form Data: ', data);
      // this.actionChange.emit(true);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    }));
  }



  ngOnInit(): void {
    // this.onLoadEditForm('2');
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
