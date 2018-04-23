import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {AuthGuard} from "./auth/auth.guard";
import {LayoutComponent} from "./layout/layout.component";
import {ViewsComponent} from "./layout/views/views.component";
import {HomeComponent} from "./layout/views/home/home.component";

export const AppRoutes: Routes = [
  // {
  //   path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  // },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard],
    children: [{ path: '', component: HomeComponent }]
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
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
