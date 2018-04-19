import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {LoginForm, User} from './user.model';

@Injectable()
export class UserService {

  readonly rootUrl = 'http://bachelor-server.kods.lv';

  constructor(private http: Http) { }
  // constructor(private http: HttpClient) { }

  registerUser(user: User) {

    const body: User = {
      email:                  user.email,
      password:               user.password,
      password_confirmation:  user.password_confirmation
    }

    // var reqHeader = new HttpHeaders({'No-Auth':'True'});
    var reqHeader = new Headers({'X-Requested-With':'XMLHttpRequest'});

    return this.http.post(this.rootUrl + '/api/register', body,{headers : reqHeader});
  }

  userAuthentication(user: LoginForm) {

    const body: LoginForm = {
      email:                  user.email,
      password:               user.password
    }

    var reqHeader = new Headers( {'X-Requested-With':'XMLHttpRequest' });
    // var reqHeader = new Headers({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });

    return this.http.post(this.rootUrl + '/api/login', body, {headers : reqHeader });
  }

}
