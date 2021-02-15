import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';
import { ForecastSlotComponent } from './forecast-slot/forecast-slot.component';
import { WeatherIconsModule } from 'projects/weather-icons/src/public-api';
import { HomeComponent } from './home/home.component';
import { GooglePlacesComponent } from './google-places/google-places.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    ForecastSlotComponent,
    HomeComponent,
    GooglePlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherIconsModule,
    GooglePlaceModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
