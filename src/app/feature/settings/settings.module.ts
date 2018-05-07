import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from "./settings-routing.module";
import { UserComponent } from './user/user.component';
import {MaterialModule} from "../../material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { UiComponent } from './ui/ui.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SettingsRoutingModule,
    ReactiveFormsModule
  ],
  exports : [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [SettingsComponent, UserComponent, UiComponent]
})
export class SettingsModule { }
