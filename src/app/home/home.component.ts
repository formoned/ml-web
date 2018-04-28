import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material";
import {Observable} from 'rxjs/Rx';

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
    //   .toggle().then(function (res) {
    //   console.log(res);
    // });
  }
  onSidenavReToggle() {

    if(this.sidenavEvent.opened) {
      this.sidenavEvent.toggle();
      let timer = Observable.timer(400).subscribe(t => this.onSidenavToggle());
    }

  }

}
