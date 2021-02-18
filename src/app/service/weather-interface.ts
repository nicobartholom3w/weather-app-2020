export interface LocationData {
    formattedAddress: string,
    city: string,
    state?: string,
    country: string,
    latitude: string,
    longitude: string,
}

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

export interface WeatherHourlyForecastDisplay {
    
}

export interface WeatherGridBasePayload {
    context: any[],
    id: string,
    type: string,
    geometry: object,
    properties: WeatherGridProperties,
}

export interface WeatherGridProperties {
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

export interface WeatherHourlyForecastBasePayload {
    context: any[],
    id: string,
    type: string,
    geometry: object,
    properties: WeatherHourlyForecastProperties,
}

export interface WeatherHourlyForecastProperties {
    updated: string,
    units: string,
    forecastGenerator: string,
    generatedAt: string,
    updateTime: string,
    validTimes: string,
    elevation: object,
    periods: WeatherPeriodsBasePayload[],
}

export interface WeatherPeriodsBasePayload {
    number: number,
    name: string,
    startTime: string,
    endTime: string,
    isDaytime: boolean,
    temperature: number,
    temperatureUnit: string,
    temperatureTrend: null,
    windSpeed: string,
    windDirection: string,
    icon: string,
    shortForecast: string,
    detailedForecast: string,
}

