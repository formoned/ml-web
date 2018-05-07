import {AuthGuardService} from "./auth-guard.service";
import {AuthenticationService} from "./authentication.service";
import {SideBarService} from "./side-bar.service";
import {SettingsService} from "./settings.service";
import {ApiGetService} from "./api-get.service";
import {ApiPostService} from "./api-post.service";
import {ApiDeleteService} from "./api-delete.service";
import {GeoLocationService} from "./geo-location.service";

export const services: any[] = [
  AuthGuardService,
  AuthenticationService,
  SideBarService,
  SettingsService,
  ApiGetService,
  ApiPostService,
  ApiDeleteService,
  GeoLocationService
];

export * from './auth-guard.service';
export * from './authentication.service';
export * from './side-bar.service';
export * from './settings.service';
export * from './api-get.service';
export * from './api-post.service';
export * from './api-delete.service';
export * from './geo-location.service';
