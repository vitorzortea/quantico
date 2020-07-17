import { TestBed } from '@angular/core/testing';

import { VariaveisService } from './variaveis.service';

describe('VariaveisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariaveisService = TestBed.get(VariaveisService);
    expect(service).toBeTruthy();
  });
});
