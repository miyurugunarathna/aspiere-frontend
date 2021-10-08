import { TestBed } from '@angular/core/testing';

import { TpackageService } from './tpackage.service';

describe('TpackageService', () => {
  let service: TpackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
