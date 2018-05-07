import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ApiGetService {

  readonly rootUrl = 'https://bachelor-server.kods.lv';

  constructor(private http : Http) { }

  getCountriesList() {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.get(this.rootUrl + '/api/get/countries-list',{headers : header});
  }
  getUserPosts() {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.get(this.rootUrl + '/api/get/user-posts',{headers : header});
  }

  getUserPostsMarkers() {
    var header = new Headers();

    header.append('Accept', 'application/json');
    header.append('Authorization', "Bearer " + localStorage.getItem('token'));

    return this.http.get(this.rootUrl + '/api/get/user-posts-markers',{headers : header});
  }
}
