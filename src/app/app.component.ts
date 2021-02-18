import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationData } from './service/weather-interface';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  locationInfo: LocationData;
  isLocationSelected: boolean = false;
  isSelectedCurrent: boolean = true;
  isSelectedForecast: boolean = false; 
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {
      this.router.navigate(['/home']);
  }

  locationPicked(geolocationData: LocationData) {
    this.locationInfo = geolocationData;
    this.weatherService.getLocationData(geolocationData);
    this.isLocationSelected = true;
    this.router.navigate(['/today']);
  }

  toggleSelectedWeather() {
    this.isSelectedCurrent = !this.isSelectedCurrent;
    this.isSelectedForecast = !this.isSelectedForecast;

  }
}
