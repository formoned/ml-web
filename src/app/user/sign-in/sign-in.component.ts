import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {LoginForm, User} from "../../shared/user.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isLoginError : boolean = false;
  // email : string = 'formoned@yahoo.com';
  // password : string  = 'arlasuns';
  user: LoginForm;
  constructor(private userService : UserService,private router : Router) {
    this.user = new LoginForm();
  }

  ngOnInit() {
    console.log('login');
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      email: 'formoned@yahoo.com',
      password: 'arlasuns'
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.userAuthentication(form.value)
    .subscribe((data: any) => {
      console.log(data.json().token_type);
      localStorage.setItem('token_type', data.json().token_type);
      localStorage.setItem('access_token', data.json().access_token);
      localStorage.setItem('refresh_token', data.json().refresh_token);
      this.router.navigate(['']);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
      this.isLoginError = true;
    });
  }
}
