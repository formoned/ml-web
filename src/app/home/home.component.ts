import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav) sidenavEvent: MatSidenav;

  constructor(private router : Router) {}

  ngOnInit() {}

  onSidenavToggle() {

    this.sidenavEvent.toggle();
  }

}
