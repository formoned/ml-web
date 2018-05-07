import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FeatureComponent} from "./feature/feature.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {AppComponent} from "./app.component";
import {AuthGuardService} from "./core/services";


export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', loadChildren: "./feature/home/home.module#HomeModule" },
  { path: '', loadChildren: "./feature/feature.module#FeatureModule", canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      AppRoutes
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule implements OnInit{

  constructor() {

  }

  ngOnInit() {
  }

}
