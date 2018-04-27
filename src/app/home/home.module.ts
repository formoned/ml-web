import {NgModule, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material.module";
import {Router} from "@angular/router";
import {AuthGuard} from "../auth/auth.guard";
import {UserService} from "../shared/user.service";

@NgModule({
  imports: [
    MaterialModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [AuthGuard],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule implements OnInit {

  public constructor() {
    console.log('Home Module constructed!');
  }

  public ngOnInit() {}
}
