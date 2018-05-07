import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SideBarService} from "../../core/services";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SettingsComponent implements OnInit {

  page : string = 'Settings';
  constructor(private sidebar : SideBarService) {


  }

  ngOnInit() {
    this.sidebar.selected.emit('Settings');
  }

}
