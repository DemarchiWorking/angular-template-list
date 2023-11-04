import { TestBed } from '@angular/core/testing';

import { AmizadeResolver } from './amizade.resolver';

describe('AmizadeResolver', () => {
  let resolver: AmizadeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AmizadeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
