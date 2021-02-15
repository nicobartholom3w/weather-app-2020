export interface WeatherData {
    currentTemp: number;
    tempMeasurement: string;
    precipitationType: string;
    tempHigh: number;
    tempLow: number;
    time: string;
    day: string;
    date: string;
    icon: string;
    weatherDisplayed: string;
    latitude: string;
    longitude: string;
}

export interface LocationData {
    city: string;
    state?: string;
    country: string;
    latitude: string;
    longitude: string;
}