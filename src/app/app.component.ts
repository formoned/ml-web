// import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {UserService} from "./shared/user.service";
// import {Router} from "@angular/router";
// import {HttpErrorResponse} from "@angular/common/http";
// import {SettingsService} from "./feature/settings/settings.service";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   encapsulation: ViewEncapsulation.None,
//   providers: [SettingsService]
// })
// export class AppComponent implements OnInit{
//
//   title = 'app';
//
//   constructor(
//     private router : Router,
//     private userService : UserService,
//     private settingService : SettingsService
//   ) {
//     console.log('App component constructor');
//
//   }
//
//
//   ngOnInit() {
//     console.log('App component ng on init');
//     this.verifyToken();
//   }
//
//   verifyToken() {
//     console.log('verify token');
//     if(localStorage.getItem('access_token') != null) {
//       this.userService.isTokenAvailable(localStorage.getItem('access_token'))
//         .subscribe((data: any) => {
//
//             if(data.json().messages == "Unauthenticated.") {
//               console.log('Token has Unauthenticated!')
//               this.userService.removeAuthData();
//               this.router.navigate(['/auth/login']);
//             }
//             console.log('api/user response');
//             console.log(data.json());
//           },
//           (err: HttpErrorResponse) => {
//             console.log('error');
//             this.userService.removeAuthData();
//             this.router.navigate(['/auth/login']);
//           });
//     }
//
//   }
//
// }

import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';

  @ViewChild(MatSidenav) sidenavEvent: MatSidenav;

  constructor(private router : Router) {

  }

  onSidenavToggle() {
    this.sidenavEvent.toggle();
    //   .toggle().then(function (res) {
    //   console.log(res);
    // });
  }

}
