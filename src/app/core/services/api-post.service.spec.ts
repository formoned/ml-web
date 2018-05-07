import { TestBed, inject } from '@angular/core/testing';

import { ApiPostService } from './api-post.service';

describe('ApiPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiPostService]
    });
  });

  it('should be created', inject([ApiPostService], (service: ApiPostService) => {
    expect(service).toBeTruthy();
  }));
});
