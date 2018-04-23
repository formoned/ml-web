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
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import {FormsModule} from "@angular/forms";
import { ViewsComponent } from './layout/views/views.component';
import { HomeComponent } from './layout/views/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    ViewsComponent,
    HomeComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
