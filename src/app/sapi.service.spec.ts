import { TestBed } from '@angular/core/testing';

import { SapiService } from './sapi.service';

describe('SapiService', () => {
  let service: SapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
