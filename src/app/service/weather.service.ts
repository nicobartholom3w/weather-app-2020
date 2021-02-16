import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherIcons } from 'projects/weather-icons/src/lib/weather-icons/weather-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationData, WeatherData } from './weather-interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentWeather: WeatherData;
  currentLocation: BehaviorSubject<LocationData> = new BehaviorSubject<LocationData>(null);
  constructor(private httpClient: HttpClient) { }

  // getWeather(latitude: number, longitude: number): Observable<WeatherData> {
    
  //    this.httpClient  
  //     .get('https://api.weather.gov/points/' + latitude + ',' + longitude);
  //     // return this.weather;
  //   // return of({results: [{currentTemp: 1, temp:1}]})
  // }

  getLocationData(locationData: LocationData) {
   this.currentLocation.next(locationData);
  }

  // getLocationData = (locationData: LocationData) => this.currentLocation.next(locationData);
}
