import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Router, RouterModule} from "@angular/router";

/* Material Design Module*/
import { MaterialModule } from './material.module';
/* Angular Flex-Layout Module */
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserService} from "./shared/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HttpModule  } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutes, AppRoutingModule } from './app-routing';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { HomeModule } from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    UserModule,
    HomeModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [UserService,AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{

  constructor() {
    console.log('App module now');
  }

  ngOnInit(){
    console.log('app module ts ng on init.');
  }
}
