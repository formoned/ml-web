import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {LoginForm, LoginOAuthForm, User} from './user.model';

@Injectable()
export class UserService {

  readonly rootUrl = 'http://bachelor-server.kods.lv';
  readonly clientId = '2';
  readonly clientSecret = '1qMmaxtVnN4q1ZxvkGTZSTDLxWKxHJX5POlU5jGk';
  readonly grantType = 'password';

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


    return this.http.post(this.rootUrl + '/api/auth/register ', body,{headers : reqHeader});
  }

  userAuthentication(user: LoginForm) {

    const body: LoginOAuthForm = {
      grant_type: this.grantType,
      username: user.email,
      password: user.password,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      scope: ""
    }


    var reqHeader = new Headers();

    reqHeader.append('Accept', 'application/json');
    reqHeader.append('Content-Type', 'application/json');

    return this.http.post(this.rootUrl + '/oauth/token', body, {headers : reqHeader });
  }

  getUserClaims(){
    return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

}
