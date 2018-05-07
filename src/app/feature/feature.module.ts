import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from "./feature.component";
import {FeatureRoutingModule} from "./feature-routing.module";
import {CoreModule} from "../core";
import {MaterialModule} from "../material.module";
import {BrowserModule} from "@angular/platform-browser";
import {AuthGuardService, SettingsService, SideBarService} from "../core/services";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    FeatureRoutingModule,
    FlexLayoutModule
  ],
  exports : [
    MaterialModule
  ],
  declarations: [
    FeatureComponent
  ],
  providers : [AuthGuardService, SideBarService]
})
export class FeatureModule { }
