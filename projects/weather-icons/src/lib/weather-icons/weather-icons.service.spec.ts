import { TestBed } from '@angular/core/testing';

import { WeatherIconsService } from './weather-icons.service';

describe('WeatherIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherIconsService = TestBed.get(WeatherIconsService);
    expect(service).toBeTruthy();
  });
});
