import { TestBed, inject } from '@angular/core/testing';

import { MoviesApiCallService } from './movies-api-call.service';

describe('MoviesApiCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesApiCallService]
    });
  });

  it('should be created', inject([MoviesApiCallService], (service: MoviesApiCallService) => {
    expect(service).toBeTruthy();
  }));
});
