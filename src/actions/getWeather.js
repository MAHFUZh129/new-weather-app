
const WMO_Weather_Codes = {
    0: {
        condition: 'clear',
        icon: '☀️',
        label: 'Clear Sky',
        description: 'The sky is clear and sunny.'
    },
    1: {
        condition: 'clear',
        icon: '🌤️',
        label: 'Mainly Clear',
        description: 'Mostly clear with a few clouds.'
    },
    2: {
        condition: 'cloudy',
        icon: '⛅',
        label: 'Partly Cloudy',
        description: 'The sky is partly covered with clouds.'
    },
    3: {
        condition: 'cloudy',
        icon: '☁️',
        label: 'Overcast',
        description: 'The sky is completely covered with clouds.'
    },
    45: {
        condition: 'fog',
        icon: '🌫️',
        label: 'Fog',
        description: 'Fog is reducing visibility.'
    },
    48: {
        condition: 'fog',
        icon: '🌫️',
        label: 'Depositing Rime Fog',
        description: 'Fog with ice deposits is present.'
    },
    51: {
        condition: 'drizzle',
        icon: '🌦️',
        label: 'Light Drizzle',
        description: 'Light drizzle is falling.'
    },
    53: {
        condition: 'drizzle',
        icon: '🌦️',
        label: 'Moderate Drizzle',
        description: 'Moderate drizzle is falling.'
    },
    55: {
        condition: 'drizzle',
        icon: '🌧️',
        label: 'Dense Drizzle',
        description: 'Heavy drizzle is falling.'
    },
    56: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Light Freezing Drizzle',
        description: 'Light freezing drizzle is falling.'
    },
    57: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Dense Freezing Drizzle',
        description: 'Dense freezing drizzle is falling.'
    },
    61: {
        condition: 'rain',
        icon: '🌦️',
        label: 'Slight Rain',
        description: 'Light rain is falling.'
    },
    63: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Moderate Rain',
        description: 'Moderate rain is falling.'
    },
    65: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Heavy Rain',
        description: 'Heavy rain is falling.'
    },
    66: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Light Freezing Rain',
        description: 'Light freezing rain is falling.'
    },
    67: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Heavy Freezing Rain',
        description: 'Heavy freezing rain is falling.'
    },
    71: {
        condition: 'snow',
        icon: '🌨️',
        label: 'Slight Snowfall',
        description: 'Light snow is falling.'
    },
    73: {
        condition: 'snow',
        icon: '❄️',
        label: 'Moderate Snowfall',
        description: 'Moderate snow is falling.'
    },
    75: {
        condition: 'snow',
        icon: '❄️',
        label: 'Heavy Snowfall',
        description: 'Heavy snow is falling.'
    },
    77: {
        condition: 'snow',
        icon: '❄️',
        label: 'Snow Grains',
        description: 'Small ice particles are falling.'
    },
    80: {
        condition: 'rain',
        icon: '🌦️',
        label: 'Slight Rain Showers',
        description: 'Light rain showers are occurring.'
    },
    81: {
        condition: 'rain',
        icon: '🌧️',
        label: 'Moderate Rain Showers',
        description: 'Moderate rain showers are occurring.'
    },
    82: {
        condition: 'rain',
        icon: '⛈️',
        label: 'Violent Rain Showers',
        description: 'Heavy and intense rain showers are occurring.'
    },
    85: {
        condition: 'snow',
        icon: '🌨️',
        label: 'Slight Snow Showers',
        description: 'Light snow showers are occurring.'
    },
    86: {
        condition: 'snow',
        icon: '❄️',
        label: 'Heavy Snow Showers',
        description: 'Heavy snow showers are occurring.'
    },
    95: {
        condition: 'thunderstorm',
        icon: '⛈️',
        label: 'Thunderstorm',
        description: 'Thunderstorms are occurring.'
    },
    96: {
        condition: 'thunderstorm',
        icon: '⛈️',
        label: 'Thunderstorm with Hail',
        description: 'Thunderstorm with slight hail.'
    },
    99: {
        condition: 'thunderstorm',
        icon: '⛈️',
        label: 'Thunderstorm with Heavy Hail',
        description: 'Thunderstorm with heavy hail.'
    }

}



export const getWeather = async (place) => {

    const { name, latitude, longitude } = place

    const uri = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,temperature_2m,rain,weather_code,cloud_cover,pressure_msl,wind_speed_10m,relative_humidity_2m,apparent_temperature,precipitation,wind_direction_10m,wind_gusts_10m,surface_pressure,showers,snowfall`


    const result = await fetch(uri)
    if (!result.ok) {
        throw new Error('Failed to fetch weather data.')
    }

    const data = await result.json()

    const weather = WMO_Weather_Codes[data.current.weather_code]

    console.log(weather)


    const weatherData = {
        ...weather,
        location: name,
        temperature: data.current.temperature_2m,
        feelsLike: data.current.apparent_temperature,
        cloudCover: data.current.cloud_cover,
        humidity: data.current.relative_humidity_2m,
        pressure: data.current.pressure_msl,
        surfacePressure: data.current.surface_pressure,
        windSpeed: data.current.wind_speed_10m,
        windDirection: data.current.wind_direction_10m,
        windGusts: data.current.wind_gusts_10m,
        precipitation: data.current.precipitation,
        rain: data.current.rain,
        showers: data.current.showers,
        snowfall: data.current.snowfall,
        isDay: data.current.is_day,

    }

    return weatherData


}