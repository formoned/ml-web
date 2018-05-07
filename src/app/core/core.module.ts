import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material.module";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ActionBarComponent} from "./action-bar/action-bar.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {SideBarItemComponent} from "./side-bar-item/side-bar-item.component";
import {RouterModule} from "@angular/router";
import {
  ApiDeleteService, ApiGetService, ApiPostService, GeoLocationService, SettingsService,
  SideBarService
} from "./services";
import {AgmCoreModule} from "@agm/core";
import { RemoveBoxComponent } from './dialogs/remove-box/remove-box.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIyw4QjOimJAuGMuiM3Ar8u-bJHLIHdX0'
    })
  ],
  exports : [
    ActionBarComponent,
    SideBarComponent,
    SideBarItemComponent,
    MaterialModule
  ],
  declarations: [
    NotFoundComponent,
    ActionBarComponent,
    SideBarComponent,
    SideBarItemComponent,
    RemoveBoxComponent
  ],
  providers : [
    SideBarService,
    SettingsService,
    ApiGetService,
    ApiPostService,
    ApiDeleteService,
    GeoLocationService
  ],
  entryComponents : [
    RemoveBoxComponent
  ]
})
export class CoreModule { }

