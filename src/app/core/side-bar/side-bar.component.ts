import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SettingsService, SideBarService} from "../services";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

  selectedPage: string;
  isSidenavCompact: boolean;
  @Output() sidenav = new EventEmitter<void>();

  constructor(
    private sidebarService : SideBarService,
    private settingService : SettingsService
  ) {
    this.isSidenavCompact = this.settingService.getSideNavCompact();
  }

  ngOnInit() {
    this.sidebarService.selected
      .subscribe(
        (select: string) => {
          this.selectedPage = select;
        }
      );

    this.settingService.sideNavCompact
      .subscribe(
        (compact: boolean) => {
          this.sidenav.emit();
          this.isSidenavCompact = compact;
          // this.sidenav.emit();
        }
      );
  }

  isPageSelected(pageTitle: string): boolean {
    return pageTitle === this.selectedPage;
  }

}
