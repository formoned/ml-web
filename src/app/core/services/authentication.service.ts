import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {ILoginBody, IUserLogin} from "../models";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthenticationService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';
  readonly clientId = '2';
  readonly clientSecret = '1qMmaxtVnN4q1ZxvkGTZSTDLxWKxHJX5POlU5jGk';
  readonly grantType = 'password';

  redirectUrl: string;

  constructor(private http : Http) { }

  isAuthorized() {

  }

  login(userLogin: IUserLogin): Observable<boolean> {

    const body: ILoginBody = {
      grant_type: this.grantType,
      username: userLogin.email,
      password: userLogin.password,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      scope: ""
    };

    var header = new Headers();
    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json');

    return this.http.post(this.rootUrl + '/oauth/token', body, {headers : header})
      .pipe(
        map(response => {
          localStorage.setItem('token', response.json().access_token);
          localStorage.setItem('jwt_info', response.json());
          return response;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('jwt_info');
  }

  getUser() {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.get(this.rootUrl + '/api/user',{headers : header});
  }

  changeProfileInfo(value) {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.post(this.rootUrl + '/api/profile-edit', value, {headers : header});
  }

  changeProfilePassword(value) {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.post(this.rootUrl + '/api/profile-password-change', value, {headers : header});
  }


  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
  }
}
