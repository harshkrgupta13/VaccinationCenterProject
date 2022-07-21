import { TestBed } from '@angular/core/testing';

import { VaccinationCenterService } from './vaccination-center.service';

describe('VaccinationCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaccinationCenterService = TestBed.get(VaccinationCenterService);
    expect(service).toBeTruthy();
  });
});
