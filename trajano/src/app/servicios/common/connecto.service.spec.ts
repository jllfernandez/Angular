import { TestBed } from '@angular/core/testing';

import { ConnectoService } from './connecto.service';

describe('ConnectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectoService = TestBed.get(ConnectoService);
    expect(service).toBeTruthy();
  });
});
