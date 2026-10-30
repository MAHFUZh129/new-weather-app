export const getWeather = async (place) => {

    const { name, latitude, longitude } = place

    const uri = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,temperature_2m,rain,weather_code,cloud_cover,pressure_msl,wind_speed_10m,relative_humidity_2m,apparent_temperature,precipitation,wind_direction_10m,wind_gusts_10m,surface_pressure,showers,snowfall`


    const result = await fetch(uri)
      if (!result.ok) {
            throw new Error('Failed to fetch weather data.')
        }

    const data = await result.json()
    return {...data,name}



}