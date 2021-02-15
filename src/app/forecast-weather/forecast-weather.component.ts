import { Component, OnInit } from '@angular/core';
import { LocationData } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {
  locationInfo: LocationData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService .currentLocation
      .subscribe((currentLocation: LocationData) => {
        this.locationInfo = currentLocation;
    });
  }

}
