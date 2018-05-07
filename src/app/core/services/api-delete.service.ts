import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ApiDeleteService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';

  constructor(private http : Http) { }

  deleteUserPost(_id) {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.delete(this.rootUrl + '/api/delete/user-post/'+_id,{headers : header});
  }
}
