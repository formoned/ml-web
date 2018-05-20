import { Component, OnInit } from '@angular/core';
import {IUserLogin} from "../../core/models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule} from "@angular/forms";
import {ValidationService} from "../../core/services/validation.service";
import {AuthenticationService} from "../../core/services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : IUserLogin;
  loginForm: FormGroup;
  errorMessage: string;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private formBuilder: FormBuilder,
    private authService : AuthenticationService) {


    // if(localStorage.getItem('access_token') != null) {
    //   this.router.navigate(['/']);
    // }
    // this.user = new IUserLogin();
  }

  ngOnInit() {
    console.log('login');
    this.buildForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email:      ['formoned@yahoo.com', [ Validators.required, ValidationService.emailValidator ]],
      password:   ['arlasuns', [ Validators.required, ValidationService.passwordValidator ]]
    });
  }

  OnSubmit({ value, valid }: { value: IUserLogin, valid: boolean }) {
    this.authService.login(value)
      .subscribe(response => {
          if (response) {
            this.router.navigate([this.returnUrl]);
          } else {
            const loginError = 'Unable to login';
            this.errorMessage = loginError;
            console.log(this.errorMessage);
          }
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }

}
