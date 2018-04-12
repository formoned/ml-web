import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginFormComponent} from "./login-form/login-form.component";

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  // {path: 'login', component: LoginFormComponent},
  // {path: '**', component: LoginFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
