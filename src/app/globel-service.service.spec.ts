import { TestBed } from '@angular/core/testing';

import { GlobelServiceService } from './globel-service.service';

describe('GlobelServiceService', () => {
  let service: GlobelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
