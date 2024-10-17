import { TestBed } from '@angular/core/testing';

import { PayinService } from './payin.service';

describe('PayinService', () => {
  let service: PayinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
