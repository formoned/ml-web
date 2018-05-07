import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services";

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() sidenav = new EventEmitter<void>();

  constructor(private router : Router, private auth : AuthenticationService) {
    // this.userRequest = new UserData();
    // this.getUser();
  }

  ngOnInit() {
  }

  SidenavToggle() {
    this.sidenav.emit();

  }

  NavigateTo(route : string) {
    this.router.navigate([route]);
  }



  Logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

}
