import { NgModule } from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";

import { UserComponent } from "./user.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
  {
    path: "auth", component: UserComponent,
    children: [
      { path: 'login', component: SignInComponent },
      { path: 'signup', component: SignUpComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

  constructor(private router : Router) {
    // localStorage.removeItem('access_token');
    console.log('user-routing.module.ts' + this.router.url);
  }
}
