import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('access_token') != null) {
      this.router.navigate(['/']);
    }
    console.log('ngOnInit');
  }

}
