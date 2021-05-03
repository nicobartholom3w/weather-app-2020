export interface GoogleLocationData {
    formattedAddress: string,
    latitude: number,
    longitude: number,
}

export interface WeatherPointDataLinks {
    dailyForecastLink: string,
    hourlyForecastLink: string,
    observationStationsLink: string,
    weatherStationId: string,
    currentWeatherLink: string
}

export interface WeatherData {
    location: GoogleLocationData,
    currentWeather: WeatherCurrentDisplay,
    hourlyForecast: WeatherForecastDisplay[],
    sixDayForecast: WeatherForecastDisplay[],
    timeZoneAbbreviation: string
}

export interface WeatherCurrentDisplay {
    dateTime: string,
    currentTemperature: number,
    temperatureUnit: string,
    highTemperature: number,
    lowTemperature: number,
    isDaytime: boolean,
    icon: string,
    precipitation: string,
}

export interface WeatherForecastDisplay {
    dateTime: string,
    temperature: number,
    temperatureUnit: string,
    isDaytime: boolean,
    icon: string,
    precipitation: string,
}

export interface WeatherPointBasePayload {
    context: any[],
    id: string,
    type: string,
    geometry: object,
    properties: WeatherPointProperties,
}
export interface WeatherPointProperties {
    forecast: string,
    forecastHourly: string,
    forecastGridData: string,
    observationsStations: string,
}
// export interface WeatherPointProperties {
//     id: string,
//     type: string,
//     cwa: string,
//     forecastOffice: string,
//     gridId: string,
//     gridX: string,
//     gridY: string,
//     forecast: string,
//     forecastHourly: string,
//     forecastGridData: string,
//     observationsStations: string,
//     relativeLocation: object,
//     forecastZone: string,
//     county: string,
//     fireWeatherZone: string,
//     timeZone: string,
//     radarStation: string,
// }

export interface TimeZoneInfo {
    // getinterface from api
}

// export interface StationIdRequest {
//     context: any[],
//     type: string,
//     features: any[],
//     observationStations: string[],
// }

// export interface WeatherForecastBasePayload {
//     context: any[],
//     id: string,
//     type: string,
//     geometry: object,
//     properties: WeatherForecastProperties,
// }

// export interface WeatherForecastProperties {
//     updated: string,
//     units: string,
//     forecastGenerator: string,
//     generatedAt: string,
//     updateTime: string,
//     validTimes: string,
//     elevation: object,
//     periods: WeatherPeriodsBasePayload[],
// }

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

// export interface WeatherData {
//     currentTemp: string,
//     tempMeasurement: string,
//     precipitationType: string,
//     tempHigh: string,
//     tempLow: string,
//     time: string,
//     day: string,
//     date: string,
//     icon: string,
//     weatherDisplayed: string,  
// }

// export interface WeatherSixDayForecastDisplay {
//     location: string,
//     dateTime: string,
//     temperature: number,
//     temperatureUnit: string,
//     isDaytime: boolean,
//     icon: string,
//     precipitation: string,
// }