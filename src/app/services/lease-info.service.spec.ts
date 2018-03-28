import { TestBed, inject } from '@angular/core/testing';

import { LeaseInfoService } from './lease-info.service';

describe('LeaseInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaseInfoService]
    });
  });

  it('should be created', inject([LeaseInfoService], (service: LeaseInfoService) => {
    expect(service).toBeTruthy();
  }));
});
