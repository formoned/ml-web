import {Component, ViewEncapsulation} from '@angular/core';
import {UserService} from "./shared/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'app';
}
