export const getGeoLocation = async (city) => {

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`

    const result = await fetch(url)
    if (!result.ok) {
        throw new Error("Failed to fetch location data");
    }

    const data = await result.json()

    const { name, latitude, longitude } = data.results[0]


    return { name, latitude, longitude }


}