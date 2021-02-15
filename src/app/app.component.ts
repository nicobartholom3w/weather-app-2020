import { Component } from '@angular/core';
import { LocationData } from './service/weather-interface';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  locationInfo: LocationData;

  constructor(private weatherService: WeatherService) {}

  locationPicked(geolocationData: LocationData) {
    this.locationInfo = geolocationData;
    this.weatherService.getLocationData(geolocationData);
    
  }
}
