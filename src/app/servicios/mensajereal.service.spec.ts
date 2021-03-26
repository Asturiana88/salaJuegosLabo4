import { TestBed } from '@angular/core/testing';

import { MensajerealService } from './mensajereal.service';

describe('MensajerealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensajerealService = TestBed.get(MensajerealService);
    expect(service).toBeTruthy();
  });
});
