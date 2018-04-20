import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

/* Material Design Module*/
import { MaterialModule } from './material.module';
/* Angular Flex-Layout Module */
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserService} from "./shared/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HttpModule  } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [UserService, AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
