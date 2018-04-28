import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from "./home.component";
import {AuthGuard} from "../auth/auth.guard";
import {HomeIndexComponent} from "./home-index/home-index.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
    {
      path: "", component: HomeComponent, canActivate : [AuthGuard],
      children: [
        { path: '', component: HomeIndexComponent },
        { path: 'settings', component: SettingsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

  constructor() {
    console.log('home-routing.module.ts')
  }

}
