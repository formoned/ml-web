import { NgModule, Component, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../shared/shared.module";
import {UserComponent} from "./user.component";
import {MaterialModule} from "../material.module";
import {Router} from "@angular/router";


@NgModule({
  imports: [
    MaterialModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class UserModule implements OnInit {

  public people: Array<any>;

  public constructor(private router : Router) {
    console.log('user.module.ts');
  }

  public ngOnInit() {}
}
