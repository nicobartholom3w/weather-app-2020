import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { LocationData } from '../service/weather-interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  formattedAddress: string = "";
  geolocation: LocationData;
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
  constructor() { }

  ngOnInit() {
  }

  searchActive() {
    this.isSearchActive = true;
  }

  addressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    console.log(address);
    if(address.address_components.length < 4) {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, country: address.address_components[2].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};  
    }
    else {
      this.geolocation = {formattedAddress: this.formattedAddress, city: address.address_components[0].long_name, state: address.address_components[2].short_name, country: address.address_components[3].short_name, latitude: address.geometry.location.lat(), longitude: address.geometry.location.lng()};
    }
      this.geolocationEmitter.emit(this.geolocation);
    
    // this.formattedAddress = address.address_components[address.address_components.length - 1].short_name;

    console.log(this.geolocation);
    // console.log("latitude:" + address.geometry.location.lat());
    // console.log("longitude:" + address.geometry.location.lng());
  }

}
