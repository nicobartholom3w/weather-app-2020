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
  isLocationSelected: boolean = false;
  isSelectedCurrent: boolean = true;
  isSelectedForecast: boolean = false; 
  constructor(private weatherService: WeatherService) {}

  locationPicked(geolocationData: LocationData) {
    this.locationInfo = geolocationData;
    this.weatherService.getLocationData(geolocationData);
    this.isLocationSelected = true;
  }

  toggleSelectedWeather() {
    this.isSelectedCurrent = !this.isSelectedCurrent;
    this.isSelectedForecast = !this.isSelectedForecast;

  }
}
