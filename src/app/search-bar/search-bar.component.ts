import { Component, Input, OnInit } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  formattedAddress: string = "";
  isSearchActive: boolean = false;
  options: Options = {
    fields: ["formatted_address", "address_component", "place_id", "geometry.location"],
    // fields: [],
    types: ['(cities)'],
    // types: ['(postal_code_prefix)'],
    // types: ['(regions)'],
    // types: [],
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
    // this.formattedAddress = address.address_components[address.address_components.length - 1].short_name;
    console.log(address);
    console.log(address.geometry.location.lat());
  }

}
