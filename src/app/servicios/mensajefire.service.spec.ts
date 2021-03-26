import { TestBed } from '@angular/core/testing';

import { MensajefireService } from './mensajefire.service';

describe('MensajefireService', () => {
  let service: MensajefireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajefireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
