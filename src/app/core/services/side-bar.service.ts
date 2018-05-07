import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SideBarService {

  selected      = new EventEmitter<string>();
  sideNavCompact      = new EventEmitter<boolean>();

  constructor() {
    this.sideNavCompact.emit(this.getSideNavCompact());
  }

  setSelect(_page : string) {
    this.selected.emit(_page);
  }

  getSideNavCompact() : boolean {
    return localStorage.getItem('compact-sidenav') == 'true' ? true : false;
  }

  setSideNavCompact(_status) {
    this.sideNavCompact.emit(_status);
    localStorage.setItem('compact-sidenav', _status);
  }

}
