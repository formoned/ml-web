import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MaterialModule} from "../material.module";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "../core/services";
import {FeatureModule} from "../feature/feature.module";
import {Http} from "@angular/http";

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  providers : [AuthenticationService],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AuthModule { }

