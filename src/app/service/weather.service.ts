import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherIcons } from 'projects/weather-icons/src/lib/weather-icons/weather-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationData, WeatherGridBasePayload, WeatherForecastBasePayload } from './weather-interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  currentLocation: BehaviorSubject<LocationData> = new BehaviorSubject<LocationData>(null);
  // currentWeatherStation: weatherGridInfo;

  constructor(private httpClient: HttpClient) { }

  getGridInfo(latitude: string, longitude: string): Observable<WeatherGridBasePayload> {
    return this.httpClient
      .get<WeatherGridBasePayload>('https://api.weather.gov/points/' + latitude + ',' + longitude);
  }

  getWeatherHourlyForecast(hourlyForecastLink: string): Observable<WeatherForecastBasePayload> {
    return this.httpClient
      .get<WeatherForecastBasePayload>(hourlyForecastLink);
  }

  getWeatherDayForecast(dayForecastLink: string) {

  }

  getLocationData(locationData: LocationData) {
   this.currentLocation.next(locationData);
  }

}
