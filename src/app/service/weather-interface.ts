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

export interface weatherGridBasePayload {
    context: any[],
    id: string,
    type: string,
    geometry: object,
    properties: weatherGridProperties,

}

export interface weatherGridProperties {
    id: string,
    type: string,
    cwa: string,
    forecastOffice: string,
    gridId: string,
    gridX: string,
    gridY: string,
    forecast: string,
    forecastHourly: string,
    forecastGridData: string,
    observationsStations: string,
    relativeLocation: object,
    forecastZone: string,
    county: string,
    fireWeatherZone: string,
    timeZone: string,
    radarStation: string,
}

export interface LocationData {
    formattedAddress: string,
    city: string,
    state?: string,
    country: string,
    latitude: string,
    longitude: string,
}