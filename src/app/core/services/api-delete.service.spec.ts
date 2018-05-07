import { TestBed, inject } from '@angular/core/testing';

import { ApiDeleteService } from './api-delete.service';

describe('ApiDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDeleteService]
    });
  });

  it('should be created', inject([ApiDeleteService], (service: ApiDeleteService) => {
    expect(service).toBeTruthy();
  }));
});
