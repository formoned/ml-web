import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import {PostsRoutingModule} from "../posts/posts-routing.module";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIyw4QjOimJAuGMuiM3Ar8u-bJHLIHdX0'
    })
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
