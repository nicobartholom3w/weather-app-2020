import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLocationData, WeatherData } from './service/weather-interface';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  locationInfo: GoogleLocationData;
  weatherDataInfo: WeatherData = null;
  isLocationSelected: boolean = false;
  isSelectedCurrent: boolean = true;
  isSelectedForecast: boolean = false; 
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {
      this.router.navigate(['/home']);
  }

  locationPicked(googleLocationData: GoogleLocationData) {
    this.locationInfo = googleLocationData;
    this.weatherService.getCurrentGoogleLocationData(googleLocationData);
    this.weatherService.getWeatherPointDataLinks(googleLocationData.latitude, googleLocationData.longitude);
    // add below for calls to get weather info
    // this.weatherService.getForecast();
    // this.weatherService.getHourlyForecast();
    // this.weatherService.getCurrentWeather();
    // this.weatherService.getTimeZoneInfo();

    this.isLocationSelected = true;
    this.router.navigate(['/today']);
    console.log("today");
  }

  toggleSelectedWeather() {
    this.isSelectedCurrent = !this.isSelectedCurrent;
    this.isSelectedForecast = !this.isSelectedForecast;

  }
}
