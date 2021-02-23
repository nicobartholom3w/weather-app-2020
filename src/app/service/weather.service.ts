import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherIcons } from 'projects/weather-icons/src/lib/weather-icons/weather-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationData, WeatherGridBasePayload, WeatherForecastBasePayload, WeatherCurrentDisplay, WeatherForecastDisplay, StationIdRequest } from './weather-interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  currentLocation: BehaviorSubject<LocationData> = new BehaviorSubject<LocationData>(null);
  currentWeather: BehaviorSubject<WeatherCurrentDisplay> = new BehaviorSubject<WeatherCurrentDisplay>(null);
  hourlyForecast: BehaviorSubject<WeatherForecastDisplay> = new BehaviorSubject<WeatherForecastDisplay>(null);
  sixDayForecast: BehaviorSubject<WeatherForecastDisplay> = new BehaviorSubject<WeatherForecastDisplay>(null);

  constructor(private httpClient: HttpClient) { }


  getWeatherGrideBase(latitude: string, longitude: string) {
    this.getGridInfo(latitude, longitude)
      .subscribe({
        next: (gridInfo: WeatherGridBasePayload) => {
          // this.weatherGridBase = gridInfo;
          // this.currentWeather.timeZone = gridInfo.properties.timeZone;
          // this.hourlyForecast.timeZone = gridInfo.properties.timeZone;
          
          this.getDayForecastWeatherBase(gridInfo.properties.forecast);
          this.getWeatherHourlyForecastBase(gridInfo.properties.forecastHourly);
        },
        error: (error) => {
          alert("This weather data is not currently available. Gridbase");
        }
      });
  }

  getWeatherStationInfo(stationLink: string) {
    this.getWeatherStationId(stationLink)
      .subscribe({
        next: (stationIdInfo: StationIdRequest) => {
          
        },
        error: (error)=> {
          alert("No stations available for this location.");
        }
      })
  }

  getDayForecastWeatherBase(dayForecastWeatherLink: string) {
    this.getWeatherDayForecast(dayForecastWeatherLink)
      .subscribe({
        next: (dayForecastInfo: WeatherForecastBasePayload) => {
          // this.currentWeather.temperatureUnit = dayForecastInfo.properties.periods[0].temperatureUnit;
          // this.currentWeather.dateTime = dayForecastInfo.properties.periods[0].startTime;
          // this.currentWeather.currentTemperature = dayForecastInfo.properties.periods[0].temperature;
          // this.currentWeather.temperatureUnit = dayForecastInfo.properties.periods[0].temperatureUnit;
          // this.currentWeather.highTemperature =
        },
        error: (error) => {
          alert("This weather data is not currently available.");
        }
      })
  }

  getWeatherHourlyForecastBase(hourlyForecastLink: string) {
    this.getWeatherHourlyForecast(hourlyForecastLink)
      .subscribe({
        next: (hourlyForecastInfo: WeatherForecastBasePayload) => {
          
        },
        error: (error) => {
          alert("This weather data is not currently available.");
        }
      })
  }

  getGridInfo(latitude: string, longitude: string): Observable<WeatherGridBasePayload> {
    return this.httpClient
      .get<WeatherGridBasePayload>('https://api.weather.gov/points/' + latitude + ',' + longitude);
  }

  getWeatherStationId(stationLink: string): Observable<StationIdRequest> {
    return this.httpClient
      .get<StationIdRequest>(stationLink);
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

  getCurrentWeather(currentWeatherData: WeatherCurrentDisplay) {

  }

  getHourlyForecast(hourlyForecastWeatherData: WeatherForecastDisplay) {

  }

  getSixDayForecast(sixDayForecastWeatherData: WeatherForecastDisplay) {

  }
}
