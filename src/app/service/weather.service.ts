import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherIcons } from 'projects/weather-icons/src/lib/weather-icons/weather-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GoogleLocationData, WeatherPointBasePayload, WeatherData, WeatherPointProperties, TimeZoneInfo, WeatherPointDataLinks } from './weather-interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  currentGoogleLocation: BehaviorSubject<GoogleLocationData> = new BehaviorSubject<GoogleLocationData>(null);
  // fullWeatherData: BehaviorSubject<WeatherData> = new BehaviorSubject<WeatherData>(null);
  currentWeatherPointProperties: WeatherPointProperties = {forecast: "", forecastHourly: "", forecastGridData: "", observationsStations: "",};
  // currentWeatherPointProperties: WeatherPointProperties = { id: "", type: "", cwa: "", forecastOffice: "", gridId: "", gridX: "", gridY: "", forecast: "", forecastHourly: "", forecastGridData: "", observationsStations: "", relativeLocation: {}, forecastZone: "", county: "", fireWeatherZone: "", timeZone: "", radarStation: ""}
  currentWeatherPointBase: WeatherPointBasePayload = {context: [], id: "", type: "", geometry: {}, properties: this.currentWeatherPointProperties}
  currentTimezoneInfo: TimeZoneInfo;
  currentWeatherPointLinks: WeatherPointDataLinks;
   // currentWeather: WeatherCurrentDisplay = {dateTime: "", currentTemperature: null, temperatureUnit: "", highTemperature: null, lowTemperature: null, isDaytime: true, icon: "", precipitation: ""};
  // hourlyForecast: WeatherForecastDisplay = {dateTime: "", temperature: null, temperatureUnit: "", isDaytime: true, icon: "", precipitation: ""};
  // sixDayForecast: WeatherForecastDisplay = {dateTime: "", temperature: null, temperatureUnit: "", isDaytime: true, icon: "", precipitation: ""};
  constructor(private httpClient: HttpClient) { }


  getWeatherPointDataLinks(latitude: number, longitude: number) {
    this.getPointDataInfoCall(latitude, longitude)
      .subscribe({
        next: (pointInfo: WeatherPointBasePayload) => {
          // this.currentWeatherPointBase = pointInfo;
          // this.currentWeatherPointProperties = this.currentWeatherPointBase.properties;
          // getTimezoneInfo
          // this.currentTimezoneInfo = this.getTimeZoneInfo(latitude, longitude);
          let currentWeatherPointDataLinks: WeatherPointDataLinks = {dailyForecastLink: this.currentWeatherPointProperties.forecast, hourlyForecastLink: this.currentWeatherPointProperties.forecastHourly, observationStationsLink: this.currentWeatherPointProperties.observationsStations, weatherStationId: "", currentWeatherLink: ""}
          
        },
        error: (error) => {
                  alert("This weather data is not currently available.");
                }
      })
  }

  getPointDataInfoCall(latitude: number, longitude: number): Observable<WeatherPointBasePayload> {
    return this.httpClient
      .get<WeatherPointBasePayload>('https://api.weather.gov/points/' + latitude + ',' + longitude).pipe(
        tap((pointInfo: WeatherPointBasePayload) => {
          this.currentWeatherPointBase = pointInfo;
          this.currentWeatherPointProperties = this.currentWeatherPointBase.properties;
        })
      )
  }

  getTimeZoneInfo(latitude: string, longitude: string): Observable<any> {
    return this.httpClient.get<any>('https://api.weather.gov/points/' + latitude + ',' + longitude)
  }

  getCurrentWeatherLink(observationStationsLink: string) {

  }

  // getPointDataInfoCall(latitude: string, longitude: string): Observable<WeatherPointBasePayload> {
  //   return this.httpClient
  //     .get<WeatherPointBasePayload>('https://api.weather.gov/points/' + latitude + ',' + longitude);
  // }

  // getTimeZoneInfo(latitude: string, longitude: string) {

  // }
  // getWeatherGrideBase(latitude: string, longitude: string) {
  //   this.getGridInfo(latitude, longitude)
  //     .subscribe({
  //       next: (gridInfo: WeatherGridBasePayload) => {
  //         // this.weatherGridBase = gridInfo;
  //         // this.currentWeather.timeZone = gridInfo.properties.timeZone;
  //         // this.hourlyForecast.timeZone = gridInfo.properties.timeZone;
          
  //         this.getDayForecastWeatherBase(gridInfo.properties.forecast);
  //         this.getWeatherHourlyForecastBase(gridInfo.properties.forecastHourly);
  //       },
  //       error: (error) => {
  //         alert("This weather data is not currently available. Gridbase");
  //       }
  //     });
  // }

  // getWeatherStationInfo(stationLink: string) {
  //   this.getWeatherStationId(stationLink)
  //     .subscribe({
  //       next: (stationIdInfo: StationIdRequest) => {
          
  //       },
  //       error: (error)=> {
  //         alert("No stations available for this location.");
  //       }
  //     })
  // }

  // getDayForecastWeatherBase(dayForecastWeatherLink: string) {
  //   this.getWeatherDayForecast(dayForecastWeatherLink)
  //     .subscribe({
  //       next: (dayForecastInfo: WeatherForecastBasePayload) => {
  //         // this.currentWeather.temperatureUnit = dayForecastInfo.properties.periods[0].temperatureUnit;
  //         // this.currentWeather.dateTime = dayForecastInfo.properties.periods[0].startTime;
  //         // this.currentWeather.currentTemperature = dayForecastInfo.properties.periods[0].temperature;
  //         // this.currentWeather.temperatureUnit = dayForecastInfo.properties.periods[0].temperatureUnit;
  //         // this.currentWeather.highTemperature =
  //       },
  //       error: (error) => {
  //         alert("This weather data is not currently available.");
  //       }
  //     })
  // }

  // getWeatherHourlyForecastBase(hourlyForecastLink: string) {
  //   this.getWeatherHourlyForecast(hourlyForecastLink)
  //     .subscribe({
  //       next: (hourlyForecastInfo: WeatherForecastBasePayload) => {
          
  //       },
  //       error: (error) => {
  //         alert("This weather data is not currently available.");
  //       }
  //     })
  // }

  // getGridInfo(latitude: string, longitude: string): Observable<WeatherGridBasePayload> {
  //   return this.httpClient
  //     .get<WeatherGridBasePayload>('https://api.weather.gov/points/' + latitude + ',' + longitude);
  // }

  // getWeatherStationId(stationLink: string): Observable<StationIdRequest> {
  //   return this.httpClient
  //     .get<StationIdRequest>(stationLink);
  // }

  // getWeatherHourlyForecast(hourlyForecastLink: string): Observable<WeatherForecastBasePayload> {
  //   return this.httpClient
  //     .get<WeatherForecastBasePayload>(hourlyForecastLink);
  // }

  // getWeatherDayForecast(dayForecastLink: string) {
  //   return this.httpClient
  //     .get<WeatherForecastBasePayload>(dayForecastLink);
  // }


  // getFullWeatherData(weatherData: WeatherData){
    
  //   this.fullWeatherData.next(weatherData);
  // }

  getCurrentGoogleLocationData(locationData: GoogleLocationData) {
   this.currentGoogleLocation.next(locationData);
  }
}
