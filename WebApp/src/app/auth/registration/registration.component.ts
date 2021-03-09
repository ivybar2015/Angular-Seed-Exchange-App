import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  // styleURLs
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // properties  & type
  registerForm: FormGroup;
  btnText: string;
  btnDisabled: boolean;

  // constructor() empty gave
  // valuble name fb and type FormBuilder injector
  constructor(private fb: FormBuilder) { }

 // funtion return value to .html folder
 // use GET to READ only property and return to url
  get regForm() { return this.registerForm.controls; }

  // submit funtion get call from .html folder
  public onSubmit() {
    alert('Submitted');
    this.btnText = 'Sending..';
    this.btnDisabled = true;

    // Service call
    setTimeout(() => {
      this.btnText = 'submit';
      this.btnDisabled = false;
      this.registerForm.reset();
    }, 3000);

  }

  getValue(name: string) {

    return `Hello ${name}`;
  }

 // this funtion name gave
  ngOnInit() {

    // assign value
   this.btnText = 'Submit';
   this.btnDisabled = false;
   //  for FormBuilder controller
   this.registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });
  }

}
