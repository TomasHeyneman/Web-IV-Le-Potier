import { TestBed } from '@angular/core/testing';

import { KeramiekDataService } from './keramiek-data.service';

describe('KeramiekDataService', () => {
  let service: KeramiekDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeramiekDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
