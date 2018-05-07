import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FeatureComponent} from "./feature.component";
import {NotFoundComponent} from "../core/not-found/not-found.component";
import {AuthGuardService} from "../core/services";


const routes: Routes = [

  // { path: "", component: FeatureComponent }
  { path: "", component: FeatureComponent,
    children : [
      {
        path: 'home',
        loadChildren: "app/feature/home/home.module#HomeModule"
      },
      {
        path: 'settings',
        loadChildren: "app/feature/settings/settings.module#SettingsModule"
      },
      {
        path: 'posts',
        loadChildren: "app/feature/posts/posts.module#PostsModule"
      },
    ], canActivate: [AuthGuardService]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
