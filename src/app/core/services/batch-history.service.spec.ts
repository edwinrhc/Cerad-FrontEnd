import { TestBed } from '@angular/core/testing';

import { BatchHistoryService } from './batch-history.service';

describe('BatchHistoryService', () => {
  let service: BatchHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
