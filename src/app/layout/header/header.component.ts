import {Component, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/user.service";
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() sidenav = new EventEmitter<void>();

  ngOnInit() {
    // this.trigger.p/
  }

  sidenavToggle() {
    this.sidenav.emit();

  }

  Logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}
