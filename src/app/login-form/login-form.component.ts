import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  myform: FormGroup;


  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
    }
  }

  onLoginClick() {
    // alert('kek');
  }
}
