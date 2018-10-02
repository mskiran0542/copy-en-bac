import { TestBed, inject } from '@angular/core/testing';

import { BaccnService } from './baccn.service';

describe('BaccnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaccnService]
    });
  });

  it('should be created', inject([BaccnService], (service: BaccnService) => {
    expect(service).toBeTruthy();
  }));
});
