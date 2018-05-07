import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../core/models";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private router: Router) {
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


}
