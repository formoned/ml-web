import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiGetService, AuthenticationService, GeoLocationService, SideBarService} from "../../core/services";
import {AgmMap} from "@agm/core";
import {Validators} from "@angular/forms";
import {Router} from "@angular/router";

interface marker {
  id: number;
  lat: number;
  lng: number;
  created_at: string;
  title?: string;
  label?: string;
}

export interface profileForm {
  name : string;
  email : string;
  created_at : string;
  gender : string;
  about : string;
  title : string;
  country_id : number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  page : string = 'Home';

  @ViewChild(AgmMap) agmMap:AgmMap;
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers : marker[] = [];
  lastMarker : string;

  user : profileForm = {
    name : '',
    email : '',
    created_at : '',
    title : '',
    about : '',
    gender : 'other',
    country_id : null
  }

  genders = [];

  constructor(
    private sidebar : SideBarService,
    private apiGetService : ApiGetService,
    private authenticationService : AuthenticationService,
    private router : Router,
    private geoLocationService : GeoLocationService

  ) {}

  ngOnInit() {
    this.sidebar.selected.emit(this.page);
    this.loadUser();
    this.loadUserPostsMarkers();
    this.genders.push(
      {key : 'man', value : 'Man'},
        {key : 'woman', value : 'Woman'},
        {key : 'other', value : 'Other'}
    );
  }

  getMyLocation() {
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        console.log('kek');
        this.lat = (pos.coords.latitude);
        this.lng = (pos.coords.longitude);
        this.agmMap.latitude = (pos.coords.latitude);
        this.agmMap.longitude = (pos.coords.longitude);
        console.log(this.agmMap.longitude);
      },
      error => {
        console.log(error);
      });
  }
  navigateToPost(id) {
    this.router.navigate(['/posts/'+id]);
  }

  loadUser() {
    this.authenticationService.getUser()
      .subscribe(response => {
          // this.profileEdit.controls['name'].setValue(response.json().name);
          this.user.name = response.json().name;
          this.user.email = response.json().email;
          this.user.created_at = response.json().created_at;
          this.user.gender = response.json().gender;
          for(let v of this.genders) {
            if(v.key == response.json().gender) {
              this.user.gender = v.value;
            }
          }
          this.user.title = response.json().title;
          this.user.about = response.json().about;
          this.user.country_id = response.json().country_id;
          // this.profileEdit.controls['email'].setValue(response.json().email);
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }

  loadUserPostsMarkers() {

    this.apiGetService.getUserPostsMarkers()
      .subscribe(response => {
        var posts = response.json().posts;
        this.markers = [];
        let alphabets = [];
        for (let i = 65; i <= 90;i++) {
          alphabets.push(String.fromCharCode(i));
        }
        for (let i = 65; i <= 90;i++) {
          for (let j = 65; j <= 90;j++) {
            alphabets.push(String.fromCharCode(i) + String.fromCharCode(j));
          }
        }
        let num = -1;
        let last_lat = this.lat;
        let last_lng = this.lng;
        let last_marker;
        for (var v in posts) {
          num++;
          this.markers.push({
            id: Number(posts[v].id),
            lat: Number(posts[v].lat),
            lng: Number(posts[v].lng),
            created_at: posts[v].created_at,
            title: posts[v].title,
            label : alphabets[num]
          });
          last_marker = posts[v].created_at;
          last_lat = Number(posts[v].lat);
          last_lng = Number(posts[v].lng);
        }
        this.lat = last_lat;
        this.lng = last_lng;
        this.lastMarker = last_marker;

          // this.posts = response.json().posts;
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }

}
