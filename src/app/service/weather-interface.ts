export interface WeatherData {
    currentTemp: string,
    tempMeasurement: string,
    precipitationType: string,
    tempHigh: string,
    tempLow: string,
    time: string,
    day: string,
    date: string,
    icon: string,
    weatherDisplayed: string,  
}

export interface weatherGridInfo {
    gtidId: string,
    gridX: string,
    gridY: string,
}

export interface LocationData {
    formattedAddress: string,
    city: string,
    state?: string,
    country: string,
    latitude: string,
    longitude: string,
}