import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from "./home.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
    { path: "", component: HomeComponent, canActivate : [AuthGuard]}
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
