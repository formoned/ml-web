import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginFormComponent} from "./login-form/login-form.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";

export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }


  // {path: 'login', component: LoginFormComponent},
  // {path: '**', component: LoginFormComponent}
];

// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule],
//   declarations: []
// })
// export class AppRoutingModule { }
