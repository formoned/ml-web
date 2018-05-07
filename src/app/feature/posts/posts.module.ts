import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {DialogOverviewExampleDialog, PostsComponent} from './posts.component';
import {MaterialModule} from "../../material.module";
import {SettingsRoutingModule} from "../settings/settings-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AgmCoreModule} from "@agm/core";

@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIyw4QjOimJAuGMuiM3Ar8u-bJHLIHdX0'
    })
  ],
  exports : [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [PostsComponent],
})
export class PostsModule { }
