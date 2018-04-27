import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { NgForm} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  user: User;
  // userRegistrationForm: FormGroup;
  // errors = errorMessages;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService,private router: Router) {
    if(localStorage.getItem('access_token') != null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.json().success == true) {
          alert('User registration successful');
          this.router.navigate(['./login']);
        }
        else
          console.log(data);
      },
      (error : any) => {
        console.log(error);
      });
  }

  // onSubmit() {
  //   this.authenticationService
  //     .authenticate(this.loginForm.value)
  //     .subscribe(
  //       data => {
  //         localStorage.setItem('id_token', data.token);
  //         this.router.navigate(['post']);
  //       },
  //       (error : any) => {
  //         let errorData = error.json();
  //         if(errorData.children.email.errors.length > 0){
  //           this.emailError = errorData.children.email.errors[0];
  //         }
  //         if(errorData.children.name.errors.length > 0)){
  //     this.nameError = errorData.children.name.errors[0];
  //   }
  // }
// );
// }

}
