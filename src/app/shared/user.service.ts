import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {LoginForm, LoginOAuthForm, User} from './user.model';
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';
  readonly clientId = '2';
  readonly clientSecret = '1qMmaxtVnN4q1ZxvkGTZSTDLxWKxHJX5POlU5jGk';
  readonly grantType = 'password';

  constructor(private http: Http, private router : Router) { }

  getRequestHeader() {
    // Without token. Use example for Login request.


    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json');
    return header;
  }
  getTokenedHeader() {

    var header = new Headers();

    header.append('Authorization', "Bearer " + localStorage.getItem('access_token'));

    return header;
  }
  isTokenAvailable(access_token : string) {

    // var header = this.getTokenedHeader();
    var header = new Headers();

    header.append('Accept', 'application/json');
    // header.append('Content-Type', 'application/x-www-form-urlencoded');
    header.append('Authorization', "Bearer " + localStorage.getItem('access_token'));

    return this.http.get(this.rootUrl + '/api/user',{headers : header})
  }


  test() {

    const body = {
      email:                  'kods@kek.lv',
      password:               'arlasuns',
      password_confirmation:  'arlasuns'
    }

    // var reqHeader = new HttpHeaders({'No-Auth':'True'});
    var reqHeader = this.getTokenedHeader();


    return this.http.post(this.rootUrl + '/api/add ', body,{headers : reqHeader});

  }




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

  removeAuthData() {
    localStorage.removeItem('token_type');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  getUser() {

    // var header = this.getTokenedHeader();
    var header = new Headers();

    header.append('Accept', 'application/json');
    // header.append('Content-Type', 'application/x-www-form-urlencoded');
    header.append('Authorization', "Bearer " + localStorage.getItem('access_token'));

    return this.http.get(this.rootUrl + '/api/user',{headers : header});


    // if (localStorage.getItem('access_token') != null) {
    //
    //   this.isTokenAvailable(localStorage.getItem('access_token'))
    //     .subscribe((data: any) => {
    //       console.log(data.json());
    //       return data.json();
    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log('notAvailable');
    //       console.log(err);
    //     });
    // }
    // else {
    //   console.log('navigate auth login');
    //   this.router.navigate(['/auth/login']);
    // }
  }

}
