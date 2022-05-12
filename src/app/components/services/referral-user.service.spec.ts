import { TestBed } from '@angular/core/testing';

import { ReferralUserService } from './referral-user.service';

describe('ReferralUserService', () => {
  let service: ReferralUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferralUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
