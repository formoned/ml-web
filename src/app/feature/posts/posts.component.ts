import {Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiDeleteService, ApiGetService, ApiPostService, GeoLocationService, SideBarService} from "../../core/services";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {RemoveBoxComponent} from "../../core/dialogs/remove-box/remove-box.component";
import {google, LatLngLiteral} from "@agm/core/services/google-maps-types";
import {AgmCoreModule, AgmMap, MouseEvent} from "@agm/core";
import {countries, profileForm} from "../settings/user/user.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../core/services/validation.service";
import {ActivatedRoute, Router} from "@angular/router";

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface post {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  map_lat: number;
  map_lng: number;
  created_by: number;
  created_at: string;
  updated_at: string;
  draggable : boolean;
  editable : boolean;
  valid : boolean;
  default_lat: number;
  default_lng: number;
  default_title: string,
  default_description: string,
  form : FormGroup
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PostsComponent implements OnInit {

  // Compnent settings
  page : string = 'Posts';

  // Posts
  selectedPost;
  posts : post[] = [];

  // New Post
  newPost: FormGroup;
  showNewPostForm : boolean = false;
  FormErrorMessageBag = [];

  // Post edit
  editPosts : [{id : number, post : FormGroup}];
  PostsFormErrorMessageBag = [];

  // Google Maps
  @ViewChild(AgmMap) agmMap:AgmMap;
  lat: number = 51.678418;
  lng: number = 7.809007;
  markerLat: number = this.lat;
  markerLng: number = this.lng;

  coordinates;

  constructor(
    private sidebar : SideBarService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiPostService : ApiPostService,
    private apiGetService : ApiGetService,
    private apiDeleteService : ApiDeleteService,
    private route : ActivatedRoute,
    private geoLocationService : GeoLocationService
  ) {}

  ngOnInit() {
    this.sidebar.selected.emit(this.page);
    this.buildForm();
    this.loadPosts();

    this.getMyLocation();
    this.route.paramMap.subscribe(params => {
      if(params.get('id') == 'new')
      {
        this.showNewPostForm = true;
      }
      else {
        this.selectedPost = params.get('id');
      }

    });
  }

  getMyLocation() {
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        this.lat = (pos.coords.latitude);
        this.lng = (pos.coords.longitude);
        this.markerLat = (pos.coords.latitude);
        this.markerLng = (pos.coords.longitude);
        this.newPost.controls['lat'].setValue((pos.coords.latitude));
        this.newPost.controls['lng'].setValue((pos.coords.longitude));
      });
  }

  loadPosts() {
    this.apiGetService.getUserPosts()
      .subscribe(response => {

        var posts = response.json().posts;
        this.posts = [];
          for (var v in posts) {
            this.posts.push({
              id: Number(posts[v].id),
              title: posts[v].title,
              description: posts[v].description,
              lat: Number(posts[v].lat),
              lng: Number(posts[v].lng),
              map_lat: Number(posts[v].lat),
              map_lng: Number(posts[v].lng),
              created_by: Number(posts[v].created_by),
              created_at: posts[v].created_at,
              updated_at: posts[v].updated_at,
              draggable : false,
              editable : false,
              valid : false,
              default_lat: Number(posts[v].lat),
              default_lng: Number(posts[v].lng),
              default_title: posts[v].title,
              default_description: posts[v].description,
              form : this.formBuilder.group({
                id: [Number(posts[v].id), [Validators.required ]],
                title: [posts[v].title, [Validators.required ]],
                description: [posts[v].description, [ Validators.required ]],
                lat: [Number(posts[v].lat), [ Validators.required ]],
                lng: [Number(posts[v].lng), [ Validators.required ]]
              })
            });
          }
          // this.posts = response.json().posts;
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }


  // Map events

  mapClicked($event: MouseEvent) {
    console.log('mapClicked');
    this.markerLat = $event.coords.lat;
    this.markerLng = $event.coords.lng;
    this.newPost.controls['lat'].setValue($event.coords.lat);
    this.newPost.controls['lng'].setValue($event.coords.lng);
  }
  markerDrag($event: MouseEvent) {
    console.log('markerDrag');
    this.markerLat = $event.coords.lat;
    this.markerLng = $event.coords.lng;
    this.newPost.controls['lat'].setValue($event.coords.lat);
    this.newPost.controls['lng'].setValue($event.coords.lng);
  }

  // New Post

  buildForm() {
    this.newPost = this.formBuilder.group({
      title: ['', [Validators.required , Validators.maxLength(60) ]],
      description: ['', [ Validators.required , Validators.maxLength(480) ]],
      lat: [this.markerLat, [ Validators.required ]],
      lng: [this.markerLng, [ Validators.required ]]
    });
  }
  addNewPost() {
    this.showNewPostForm = true;
  }
  submitNewPost({ value, valid }: { value: any, valid: boolean }) {
    this.apiPostService.saveNewPost(value)
      .subscribe(response => {
          if(response.json().success === true) {
            this.newPost.reset();
            this.loadPosts();
            this.FormErrorMessageBag = [];
            this.showNewPostForm = false;
          } else {
            this.setFormControlErrors(this.newPost, response.json().error);
          }
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }
  closeNewPost() {
    this.showNewPostForm = false;
    this.newPost.reset();
  }
  private setFormControlErrors(form : FormGroup, response) {
    this.FormErrorMessageBag = [];
    for (var v in response) {
      form.controls[v].setErrors(response[v]);
      this.FormErrorMessageBag[v] = response[v];
    }
  }

  // Post Remove

  openDialog(_id): void {
    let dialogRef = this.dialog.open(RemoveBoxComponent, {
      panelClass: 'mat-dialog-class',
      data: { confirm : true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.removePost(_id);
      }
    });
  }
  removePost(_id : number) {
    this.apiDeleteService.deleteUserPost(_id)
      .subscribe(response => {
          if(response.json().success === true) {
            this.loadPosts();
          } else {
            console.log(response.json().message);
          }
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }

  // Post Edit

  closePostEdit(post : post) {
    post.editable = false;
    post.draggable = false;
    post.title = post.default_title;
    post.description = post.default_description;
    post.lat = post.default_lat;
    post.lng = post.default_lng;
  }
  openPostEdit(post : post) {
    post.editable = true;
    post.draggable = true;
  }
  dragedPostEdit($event: MouseEvent, post : post) {
    post.lat = $event.coords.lat;
    post.lng = $event.coords.lng;
  }
  submitPostEdit({ value, valid }: { value: any, valid: boolean }, post : post) {

    this.apiPostService.savePostEdit(value)
      .subscribe(response => {
          if(response.json().success === true) {
            post.editable = false;
            post.draggable = false;
            post.default_title = post.title;
            post.default_description = post.description;
            post.default_lat = post.lat;
            post.default_lng = post.lng;
          } else {
            this.setPostsFormControlErrors(post.form, response.json().error, post.id);
          }
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }
  private setPostsFormControlErrors(form : FormGroup, response, id) {
    this.PostsFormErrorMessageBag = [];

    for (var v in response) {
      console.log(response[v]);
      form.controls[v].setErrors(response[v]);
      this.PostsFormErrorMessageBag[id + '_' + v] = response[v];
    }
  }



}

