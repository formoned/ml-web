import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import {MatMenuTrigger} from "@angular/material";
import {UserService} from "../../shared/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User, UserData} from "../user.model";
import {Headers} from "@angular/http";


@Component({
  selector: "app-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() sidenav = new EventEmitter<void>();

  userRequest : UserData;



  constructor(private router : Router, private userService : UserService) {
    this.userRequest = new UserData();
    this.getUser();
  }

  ngOnInit(): void {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }

  sidenavToggle() {
    this.sidenav.emit();

  }

  test() {
    console.log('asdasdasdad');
    this.userService.test().subscribe((data: any) => {
      console.log(data.json());
      },
      (err: HttpErrorResponse) => {
        console.log('notAvailable');
        console.log(err);
      });
  }

  getUser() {


    this.userService.getUser().subscribe((data: any) => {
        this.userRequest.id = data.json().id;
        this.userRequest.name = data.json().name;
        this.userRequest.email = data.json().email;
        this.userRequest.created_at = data.json().created_at;
      },
      (err: HttpErrorResponse) => {
        console.log('notAvailable');
        console.log(err);
      });
  }

  Logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth/login']);
  }

}
