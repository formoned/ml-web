import { Component, OnInit } from '@angular/core';
import { SettingsService } from "./settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  checked : boolean;
  constructor(private settingService : SettingsService) {


  }

  ngOnInit() {

    this.settingService.sideNavCompact
      .subscribe(
        (compact: boolean) => {
          localStorage.setItem('compact-sidenav', compact + '');
        }
      );

    this.checked = this.settingService.getSideNavCompact();
  }

  changeSidebarCompact(_status : boolean) {
    this.settingService.setSideNavCompact(_status);
    // this.settingService.sideNavCompact.emit(_status);
  }

}
