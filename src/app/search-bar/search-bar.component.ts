import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { LocationData, WeatherGridBasePayload, WeatherForecastBasePayload, WeatherCurrentDisplay, WeatherHourlyForecastDisplay, WeatherSixDayForecastDisplay } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  formattedAddress: string = "";
  geolocation: LocationData;
  weatherGridBase: WeatherGridBasePayload;
  weatherHourlyForecast: WeatherForecastBasePayload;
  currentWeather: WeatherCurrentDisplay;
  hourlyForecast: WeatherHourlyForecastDisplay;
  sixDayForecast: WeatherSixDayForecastDisplay;
  @Output() geolocationEmitter: EventEmitter<LocationData> = new EventEmitter();
  isSearchActive: boolean = false;
  options: Options = {
    fields: ["formatted_address", "address_component", "place_id", "geometry.location"],
    types: ['(cities)'],
    // types: ['(regions)'],
    bounds: undefined,
    componentRestrictions: { country: "us" },
    strictBounds: undefined,
    origin: undefined
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  searchActive() {
    this.isSearchActive = true;
  }

  addressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    this.currentWeather.location = this.formattedAddress;
    this.hourlyForecast.location = this.formattedAddress;
    this.sixDayForecast.location = this.formattedAddress;
    if(address.address_components.length < 4) {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, country: address.address_components[2].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};  
    }
    else {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, state: address.address_components[2].short_name, country: address.address_components[3].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};
    }
      this.getWeatherGrideBase(this.geolocation.latitude, this.geolocation.longitude);
      this.geolocationEmitter.emit(this.geolocation);
      
  }

  getWeatherGrideBase(latitude: string, longitude: string) {
    this.weatherService.getGridInfo(latitude, longitude)
      .subscribe({
        next: (gridInfo: WeatherGridBasePayload) => {
          this.weatherGridBase = gridInfo;
          this.currentWeather.timeZone = gridInfo.properties.timeZone;
          this.hourlyForecast.timeZone = gridInfo.properties.timeZone;
          this.getCurrentWeatherBase(gridInfo.properties.forecast);
          this.getWeatherHourlyForecastBase(gridInfo.properties.forecastHourly);
        },
        error: (error) => {
          alert("This weather data is not currently available. Gridbase");
        }
      });
  }

  getCurrentWeatherBase(dayForecastWeatherLink: string) {
    this.weatherService.getWeatherDayForecast(dayForecastWeatherLink)
      .subscribe({
        next: (dayForecastInfo: WeatherForecastBasePayload) => {
          this.currentWeather.temperatureUnit = dayForecastInfo.properties.periods[0].temperatureUnit;
          this.currentWeather.dateTime = dayForecastInfo.properties.periods[0].startTime;
          this.currentWeather.currentTemperature = dayForecastInfo.properties.periods[0].temperature;
          this.currentWeather.temperatureUnit = dayForecastInfo.properties.periods[0].temperatureUnit;
          // this.currentWeather.highTemperature =
        },
        error: (error) => {
          alert("This weather data is not currently available.");
        }
      })
  }

  getWeatherHourlyForecastBase(hourlyForecastLink: string) {
    this.weatherService.getWeatherHourlyForecast(hourlyForecastLink)
      .subscribe({
        next: (hourlyForecastInfo: WeatherForecastBasePayload) => {
          
        },
        error: (error) => {
          alert("This weather data is not currently available.");
        }
      })
  }

}
