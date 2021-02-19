import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherIcons } from 'projects/weather-icons/src/lib/weather-icons/weather-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationData, WeatherGridBasePayload, WeatherForecastBasePayload, WeatherCurrentDisplay, WeatherHourlyForecastDisplay, WeatherSixDayForecastDisplay } from './weather-interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  currentLocation: BehaviorSubject<LocationData> = new BehaviorSubject<LocationData>(null);
  currentWeather: BehaviorSubject<WeatherCurrentDisplay> = new BehaviorSubject<WeatherCurrentDisplay>(null);
  hourlyForecast: BehaviorSubject<WeatherHourlyForecastDisplay> = new BehaviorSubject<WeatherHourlyForecastDisplay>(null);
  sixDayForecast: BehaviorSubject<WeatherSixDayForecastDisplay> = new BehaviorSubject<WeatherSixDayForecastDisplay>(null);

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
    return this.httpClient
      .get<WeatherForecastBasePayload>(dayForecastLink);
  }

  getLocationData(locationData: LocationData) {
   this.currentLocation.next(locationData);
  }

  // getWeatherInfo(currentWeather: WeatherCurrentDisplay, hourlyForecastWeather: WeatherHourlyForecastDisplay, sixDayForecastWeather: WeatherSixDayForecastDisplay) {

  // }

  getCurrentWeatherData(currentWeatherData: WeatherCurrentDisplay) {

  }

  getHourlyWeatherData(hourlyForecastWeatherData: WeatherHourlyForecastDisplay) {

  }

  getSixDayWeatherData(sixDayForecastWeatherData: WeatherSixDayForecastDisplay) {

  }
}
