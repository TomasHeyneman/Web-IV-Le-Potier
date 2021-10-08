import { TestBed } from '@angular/core/testing';

import { KeramiekResolver } from './keramiek.resolver';

describe('KeramiekResolver', () => {
  let resolver: KeramiekResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(KeramiekResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
