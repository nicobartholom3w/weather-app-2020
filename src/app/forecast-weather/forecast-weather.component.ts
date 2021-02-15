import { Component, OnInit } from '@angular/core';
import { LocationData } from '../service/weather-interface';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {
  locationData: LocationData;
  constructor() { }

  ngOnInit() {
    // this.locationData = this
  }

}
