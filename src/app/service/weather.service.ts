import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherIcons } from 'projects/weather-icons/src/lib/weather-icons/weather-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationData, WeatherData, weatherGridBasePayload } from './weather-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentWeather: WeatherData;
  currentLocation: BehaviorSubject<LocationData> = new BehaviorSubject<LocationData>(null);
  // currentWeatherStation: weatherGridInfo;

  constructor(private httpClient: HttpClient) { }

  getGridInfo(latitude: string, longitude: string): Observable<weatherGridBasePayload> {
    return this.httpClient
      .get<weatherGridBasePayload>('https://api.weather.gov/points/' + latitude + ',' + longitude);
    // let call = this.httpClient 
      // .get<weatherGridInfo>('https://api.weather.gov/points/' + latitude + ',' + longitude);
    // console.log(call.)
    // return this.httpClient 
      // .get<weatherGridInfo>('https://api.weather.gov/points/' + latitude + ',' + longitude);
  }

  // getWeather(latitude: string, longitude: string): Observable<WeatherData> {
  //   let stationCall = 
  //    this.httpClient  
      
  //     console.log(stationCall);
  //     // return this.weather;
  //   // return of({results: [{currentTemp: 1, temp:1}]})
  // }

  getLocationData(locationData: LocationData) {
   this.currentLocation.next(locationData);
  }

  // getLocationData = (locationData: LocationData) => this.currentLocation.next(locationData);
}
