import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';


const routes: Routes = [
  { path: 'today', component: CurrentWeatherComponent },
  { path: 'tenday', component: ForecastWeatherComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
