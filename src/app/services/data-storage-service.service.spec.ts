import { TestBed, inject } from '@angular/core/testing';

import {DataStorageService} from './data-storage-service.service';

describe('DataStorageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStorageService]
    });
  });

  it('should be created', inject([DataStorageService], (service: DataStorageService) => {
    expect(service).toBeTruthy();
  }));
});
