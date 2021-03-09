import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy  {
  // declared
  @Output() actionChange = new EventEmitter();
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

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // "data' variable can be name any
      this.subs.add(this.userSVC.addNewUser(this.userForm).subscribe((data) => {
      console.log('Create Message: ', data);
      this.actionChange.emit(true);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
    }));
  }

}
