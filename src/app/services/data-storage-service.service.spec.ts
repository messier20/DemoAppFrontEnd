import { TestBed, inject } from '@angular/core/testing';

import { DataStorageServiceService } from './data-storage-service.service';

describe('DataStorageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStorageServiceService]
    });
  });

  it('should be created', inject([DataStorageServiceService], (service: DataStorageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
