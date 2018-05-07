import {EventEmitter} from '@angular/core';

export class SettingsService {

  sideNavCompact      = new EventEmitter<boolean>();

  constructor () {
    this.sideNavCompact.emit(this.getSideNavCompact());
  }

  getSideNavCompact() : boolean {
    return localStorage.getItem('compact-sidenav') == 'true' ? true : false;
  }

  setSideNavCompact(_status) {
    this.sideNavCompact.emit(_status);
    localStorage.setItem('compact-sidenav', _status);
  }

}
