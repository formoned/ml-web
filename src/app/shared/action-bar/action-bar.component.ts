import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import {MatMenuTrigger} from "@angular/material";
import {UserService} from "../../shared/user.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: "app-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() sidenav = new EventEmitter<void>();

  constructor(private router : Router, private userService : UserService) {
    this.getUser();
  }

  ngOnInit(): void {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    // this.verifyToken();
  }

  // verifyToken() {
  //   this.userService.isTokenAvailable()
  // }

  sidenavToggle() {
    this.sidenav.emit();

  }

  getUser() {
    if (localStorage.getItem('access_token') != null) {

      // this.userService.isTokenAvailable(localStorage.getItem('access_token'))
      //   .subscribe((data: any) => {
      //       console.log('isAvailable');
      //       console.log(data.json());
      //     },
      //     (err: HttpErrorResponse) => {
      //       console.log('notAvailable');
      //       console.log(err);
      //       this.router.navigate(['/auth/login']);
      //     });
    }
    else {
      console.log('navigate auth login');
      this.router.navigate(['/auth/login']);
    }
  }

  Logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth/login']);
  }

}
