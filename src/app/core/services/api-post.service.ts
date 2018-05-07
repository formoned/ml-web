import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ApiPostService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';

  constructor(private http : Http) { }

  saveNewPost(body) {

    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.post(this.rootUrl + '/api/post/save-new-post', body,{headers : header});
  }

  savePostEdit(body) {

    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.post(this.rootUrl + '/api/post/edit-post', body,{headers : header});
  }

}
