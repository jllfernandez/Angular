import { TestBed } from '@angular/core/testing';

import { ServicioConcretoService } from './servicio-concreto.service';

describe('ServicioConcretoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioConcretoService = TestBed.get(ServicioConcretoService);
    expect(service).toBeTruthy();
  });
});
