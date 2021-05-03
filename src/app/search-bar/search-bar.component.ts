import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { GoogleLocationData, WeatherCurrentDisplay, WeatherForecastDisplay, WeatherData, WeatherPointDataLinks } from '../service/weather-interface';
import { WeatherService } from '../service/weather.service';

// declare let google: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // formattedAddress: string = "";
  googleData: GoogleLocationData = { formattedAddress: "", latitude: 0, longitude: 0};
  // weatherDataFull: WeatherData = {location: null, currentWeather: null, hourlyForecast: null, sixDayForecast: null}; 
  currentWeatherPointDataLinks: WeatherPointDataLinks = {dailyForecastLink: "", hourlyForecastLink: "", observationStationsLink: "", weatherStationId: "", currentWeatherLink: ""}
  isSearchActive: boolean = false;
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

  @Output() googleLocationEmitter: EventEmitter<GoogleLocationData> = new EventEmitter();
  // @Output() geolocationEmitter: EventEmitter<LocationData> = new EventEmitter();
  // @Output() weatherDataEmitter: EventEmitter<WeatherData> = new EventEmitter();
  @Output() weatherDataEmitter: EventEmitter<GoogleLocationData> = new EventEmitter();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  searchActive() {
    this.isSearchActive = true;
  }

  onAddressChange(address: google.maps.places.PlaceResult) {
    // google.maps.places.Au
    // google.maps.places.AutocompleteResponse
    
    // this.formattedAddress = address.formatted_address;
    console.log(address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.googleData = {formattedAddress: address.formatted_address, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};
    // this.currentWeatherPointDataLinks = this.weatherService.getPointDataInfoCall(this.googleData.latitude, this.googleData.longitude);
    this.googleLocationEmitter.emit(this.googleData);
    // this.
    // if(address.address_components.length < 4) {
    //   this.geolocation = {formattedAddress: address.formattedAddress, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};  
    // }
    // else {
    //   this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, state: address.address_components[2].short_name, country: address.address_components[3].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng(), timeZone: ""};
    // }
      // this.weatherService.getWeatherGrideBase(this.geolocation.latitude, this.geolocation.longitude);
      // this.geolocationEmitter.emit(this.geolocation);
      this.weatherDataEmitter.emit(this.googleData);
  }

  

}
