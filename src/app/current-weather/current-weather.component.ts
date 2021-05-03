import { Component, Input, OnInit } from '@angular/core';
import { GoogleLocationData } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  locationInfo: GoogleLocationData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.currentGoogleLocation
      .subscribe((currentLocation: GoogleLocationData) => {
        this.locationInfo = currentLocation;
        console.log(this.locationInfo);
    });
  }
      
}
