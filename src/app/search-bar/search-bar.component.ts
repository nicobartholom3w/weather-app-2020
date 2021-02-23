import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { LocationData, WeatherGridBasePayload, WeatherForecastBasePayload, WeatherCurrentDisplay, WeatherForecastDisplay, StationIdRequest, WeatherData } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  formattedAddress: string = "";
  geolocation: LocationData = { formattedAddress: "", city: "", timeZone: "", zipCode: "", state: "", country: "", latitude: "", longitude: ""};
  weatherDataFull: WeatherData = {location: null, currentWeather: null, hourlyForecast: null, sixDayForecast: null};
  // currentWeather: WeatherCurrentDisplay = {dateTime: "", currentTemperature: null, temperatureUnit: "", highTemperature: null, lowTemperature: null, isDaytime: true, icon: "", precipitation: ""};
  // hourlyForecast: WeatherForecastDisplay = {dateTime: "", temperature: null, temperatureUnit: "", isDaytime: true, icon: "", precipitation: ""};
  // sixDayForecast: WeatherForecastDisplay = {dateTime: "", temperature: null, temperatureUnit: "", isDaytime: true, icon: "", precipitation: ""};;
  isSearchActive: boolean = false;
  @Output() geolocationEmitter: EventEmitter<LocationData> = new EventEmitter();
  @Output() weatherDataEmitter: EventEmitter<WeatherData> = new EventEmitter();
  options: Options = {
    fields: ["formatted_address", "address_component", "place_id", "geometry.location"],
    types: ['(cities)'],
    // types: ['(regions)'],
    // some zipcodes not working with regions, so using cities only for now
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

  onAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    console.log(address);
    if(address.address_components.length < 4) {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, country: address.address_components[2].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng(), timeZone: "" };  
    }
    else {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, state: address.address_components[2].short_name, country: address.address_components[3].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng(), timeZone: ""};
    }
      this.weatherService.getWeatherGrideBase(this.geolocation.latitude, this.geolocation.longitude);
      this.geolocationEmitter.emit(this.geolocation);
      this.weatherDataEmitter.emit(this.wea)
  }

  

}
