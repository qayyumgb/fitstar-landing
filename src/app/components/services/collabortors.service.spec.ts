import { TestBed } from '@angular/core/testing';

import { CollabortorsService } from './collabortors.service';

describe('CollabortorsService', () => {
  let service: CollabortorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollabortorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
