import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    if (localStorage.getItem('access_token') != null) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}

// this.userService.isTokenAvailable(localStorage.getItem('access_token'))
//   .subscribe((data: any) => {
//
//     if(data.json().message == 'Unauthenticated.') {
//       console.log('nooooooooooooo');
//       this.router.navigate(['/auth/login']);
//       return false;
//     }
//     else {
//       console.log('okkkk');
//       return true;
//     }
//
//   });
