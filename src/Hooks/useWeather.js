import useFetchData from "./useFetchData"

export default function useWeather(city) {
    if (city == "") { return }

    const baseGeocodingURL = import.meta.env.VITE_GEOCODING_URL
    const baseWeatherURL = import.meta.env.VITE_CURRENT_WEATHER_URL
    const apiKey = import.meta.env.VITE_API_KEY

    const geoURL = new URL(baseGeocodingURL)
    geoURL.searchParams.set("q", city)
    geoURL.searchParams.set("appid", apiKey)

    



}