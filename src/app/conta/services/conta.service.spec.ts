import { TestBed } from '@angular/core/testing';

import { ContaService } from './conta.service';

describe('ContaService', () => {
  let conta: ContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    conta = TestBed.inject(ContaService);
  });

  it('should be created', () => {
    expect(conta).toBeTruthy();
  });
});
