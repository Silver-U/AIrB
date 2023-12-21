import { TestBed } from '@angular/core/testing';

import { AirbnbsService } from './airbnbs.service';

describe('AirbnbsService', () => {
  let service: AirbnbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirbnbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
