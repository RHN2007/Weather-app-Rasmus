import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import SearchSection from "./components/SearchSection/SearchSection"
import useFetchData from "./Hooks/useFetchData"
import WeatherCard from "./components/WeatherCard/WeatherCard"

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const baseGeocodingURL = import.meta.env.VITE_GEOCODING_URL
  const baseWeatherURL = import.meta.env.VITE_CURRENT_WEATHER_URL
  const apiKey = import.meta.env.VITE_API_KEY

  let geoURL = ""
  let weatherURL = ""

  if (city) {
    const url = new URL(baseGeocodingURL)

    url.searchParams.set("q", city)
    url.searchParams.set("appid", apiKey)

    geoURL = url
  }

  const geoData = useFetchData(geoURL)

  if (geoData) {
    const lat = geoData[0].lat
    const lon = geoData[0].lon
    
    const url = new URL(baseWeatherURL)

    url.searchParams.set("lat", lat)
    url.searchParams.set("lon", lon)
    url.searchParams.set("units", "metric")
    url.searchParams.set("lang", "da")
    url.searchParams.set("appid", apiKey)

    weatherURL = url
  }

  const weatherData = useFetchData(weatherURL)

  useEffect(() => {
    if (weatherData) {
      setWeather(weatherData)
    }
    console.log(weatherData)
  }, [weatherData])

  return (
    <>
      <Header />
      <main>
        <SearchSection onSearch={setCity} />
        <WeatherCard weather={weather} />
      </main>
    </>
  )
}

export default App
