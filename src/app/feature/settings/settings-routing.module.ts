import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SettingsComponent} from "./settings.component";
import {UserComponent} from "./user/user.component";
import {UiComponent} from "./ui/ui.component";

const routes: Routes = [
  { path: "", component: SettingsComponent,
    children : [
      // {path: '', redirectTo: 'ui'},
      {path: 'ui', component: UiComponent},
      {path: 'user', component: UserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
