import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { LocationData, WeatherGridBasePayload, WeatherForecastBasePayload } from '../service/weather-interface';
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
  @Output() geolocationEmitter: EventEmitter<LocationData> = new EventEmitter();
  isSearchActive: boolean = false;
  options: Options = {
    fields: ["formatted_address", "address_component", "place_id", "geometry.location"],
    types: ['(cities)'],
    bounds: undefined,
    componentRestrictions: undefined,
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

    if(address.address_components.length < 4) {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, country: address.address_components[2].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};  
    }
    else {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, state: address.address_components[2].short_name, country: address.address_components[3].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};
    }
      this.geolocationEmitter.emit(this.geolocation);
      this.getWeatherGrideBase(this.geolocation.latitude, this.geolocation.longitude);
  }

  getWeatherGrideBase(latitude: string, longitude: string) {
    this.weatherService.getGridInfo(latitude, longitude)
      .subscribe({
        next: (gridInfo: WeatherGridBasePayload) => {
          this.weatherGridBase = gridInfo;
          this.getWeatherHourlyForecastBase(gridInfo.properties.forecastHourly);

          console.log(this.weatherGridBase);
        },
        error: (error) => {
          alert("This weather data is not currently available. Gridbase");
        }
      });
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
