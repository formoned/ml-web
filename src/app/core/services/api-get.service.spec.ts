import { TestBed, inject } from '@angular/core/testing';

import { ApiGetService } from './api-get.service';

describe('ApiGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGetService]
    });
  });

  it('should be created', inject([ApiGetService], (service: ApiGetService) => {
    expect(service).toBeTruthy();
  }));
});
