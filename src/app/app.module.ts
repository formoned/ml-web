// import { BrowserModule } from '@angular/platform-browser';
// import {NgModule, OnInit} from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {Router, RouterModule} from "@angular/router";
//
// /* Material Design Module*/
// import { MaterialModule } from './material.module';
// /* Angular Flex-Layout Module */
// import { FlexLayoutModule } from "@angular/flex-layout";
//
// import { UserService} from "./shared/user.service";
// import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
// import { HttpModule  } from "@angular/http";
//
// import { AppComponent } from './app.component';
// import { AppRoutes, AppRoutingModule } from './app-routing';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
// import { AuthGuard } from "./auth/auth.guard";
// import { AuthInterceptor } from "./auth/auth.interceptor";
// import { FormsModule } from "@angular/forms";
// import { SharedModule } from "./shared/shared.module";
// import { UserModule } from "./user/user.module";
// import { FeatureModule } from "./feature/feature.module";
// import {CoreModule} from "./core/core.module";
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     SignInComponent,
//     SignUpComponent
//   ],
//   imports: [
//     MaterialModule,
//     HttpClientModule,
//     HttpModule,
//     FormsModule,
//     // UserModule,
//     // FeatureModule,
//     // SharedModule,
//     CoreModule,
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     FlexLayoutModule,
//     RouterModule.forRoot(AppRoutes)
//   ],
//   providers: [UserService,AuthGuard,
//   {
//     provide : HTTP_INTERCEPTORS,
//     useClass : AuthInterceptor,
//     multi : true
//   }],
//   bootstrap: [AppComponent]
// })
// export class AppModule implements OnInit{
//
//   constructor() {
//     console.log('App module now');
//   }
//
//   ngOnInit(){
//     console.log('app module ts ng on init.');
//   }
// }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from "./app-routing";
import { AuthModule } from "./auth/auth.module";
import {HomeModule} from "./feature/home/home.module";
import {FeatureModule} from "./feature/feature.module";
import {MaterialModule} from "./material.module";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService, AuthGuardService} from "./core/services";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {ObservableMedia} from "@angular/flex-layout";
import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,

  ],
  exports : [
  ],
  providers : [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

