import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: "app-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() sidenav = new EventEmitter<void>();

  constructor(private router : Router) {}

  ngOnInit(): void {
  }

  sidenavToggle() {
    this.sidenav.emit();

  }

  Logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth/login']);
  }

}
