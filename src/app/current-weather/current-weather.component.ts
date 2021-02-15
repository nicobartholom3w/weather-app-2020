import { Component, Input, OnInit } from '@angular/core';
import { LocationData } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  locationInfo: LocationData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.currentLocation
      .subscribe((currentLocation: LocationData) => {
        this.locationInfo = currentLocation;
    });
  }
      
}
