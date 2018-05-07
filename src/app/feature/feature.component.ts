import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Router} from "@angular/router";
import {SideBarService} from "../core/services";
import {Observable} from 'rxjs/Rx';
import {ObservableMedia} from "@angular/flex-layout";


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @ViewChild(MatSidenav) sidenavEvent: MatSidenav;

  constructor(
    private router : Router,
    private sidebarService : SideBarService,
    public media : ObservableMedia) {
  }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sidenavEvent.toggle();
  }
  onSidenavReToggle() {
    if(this.sidenavEvent.opened) {
      this.sidenavEvent.toggle();
      let timer = Observable.timer(400).subscribe(t => this.onSidenavToggle());
    }

  }

}
