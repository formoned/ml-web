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
  email : string = '';
  password : string  = '';
  user: LoginForm;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      email: '',
      password: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.userAuthentication(form.value)
    .subscribe((data: any) => {
      // console.log(data.json().data.token);
      // localStorage.setItem('userToken', data.json().data.token);
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      console.log(err);
      this.isLoginError = true;
    });
  }
}
