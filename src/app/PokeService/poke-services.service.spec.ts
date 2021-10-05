import { TestBed } from '@angular/core/testing';

import { PokeServicesService } from './poke-services.service';

describe('PokeServicesService', () => {
  let service: PokeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
