import { TestBed, inject } from '@angular/core/testing';

import { Settings.Service.TsService } from './settings.service.ts.service';

describe('Settings.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Settings.Service.TsService]
    });
  });

  it('should be created', inject([Settings.Service.TsService], (service: Settings.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
