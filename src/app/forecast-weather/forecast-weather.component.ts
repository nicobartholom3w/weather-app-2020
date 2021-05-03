import { Component, OnInit } from '@angular/core';
import { GoogleLocationData } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {
  locationInfo: GoogleLocationData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.currentGoogleLocation
      .subscribe((currentLocation: GoogleLocationData) => {
        this.locationInfo = currentLocation;
    });
  }

}
