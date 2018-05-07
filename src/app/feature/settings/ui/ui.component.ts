import { Component, OnInit } from '@angular/core';
import {SettingsService, SideBarService} from "../../../core/services";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  checked: boolean;

  constructor(private settingService: SettingsService) {
  }

  ngOnInit() {
    //
    // this.settingService.sideNavCompact
    //   .subscribe(
    //     (compact: boolean) => {
    //       console.log('here is me');
    //       localStorage.setItem('compact-sidenav', compact + '');
    //     }
    //   );

    this.checked = this.settingService.getSideNavCompact();
  }

  changeSidebarCompact(_status: boolean) {
    this.settingService.setSideNavCompact(_status);
  }
}
