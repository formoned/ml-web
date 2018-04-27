import {NgModule, NO_ERRORS_SCHEMA, ViewEncapsulation} from "@angular/core";
import { CommonModule } from '@angular/common';
// import { NativeScriptCommonModule } from "nativescript-angular/common";
// import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { MyDrawerItemComponent } from "./my-drawer-item/my-drawer-item.component";
import { MyDrawerComponent } from "./my-drawer/my-drawer.component";
import {ActionBarComponent} from "./action-bar/action-bar.component";
import {MaterialModule} from "../material.module";

@NgModule({
  imports: [
    // NativeScriptCommonModule,
    // NativeScriptUISideDrawerModule
    CommonModule,
    MaterialModule
  ],
  declarations: [
    MyDrawerComponent,
    MyDrawerItemComponent,
    ActionBarComponent
  ],
  exports: [
    MyDrawerComponent,
    ActionBarComponent
    // NativeScriptUISideDrawerModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule {

  constructor() {
    console.log('shared.module.ts')
  }




}
