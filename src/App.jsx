import { useState } from "react"
import Header from "./components/Header/Header"
import SearchSection from "./components/SearchSection/SearchSection"
import useWeather from "./Hooks/UseWeather"
import useFetchData from "./Hooks/useFetchData"

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const baseGeocodingURL = import.meta.env.VITE_GEOCODING_URL
  const baseWeatherURL = import.meta.env.VITE_CURRENT_WEATHER_URL
  const apiKey = import.meta.env.VITE_API_KEY

  let geoURL = ""

  if (city) {
    const url = new URL(baseGeocodingURL)

    url.searchParams.set("q", city)
    url.searchParams.set("appid", apiKey)

    geoURL = url.toString()
  }

  const geoData = useFetchData(geoURL)
  console.log(geoData)


  return (
    <>
      <Header />
      <main>
        <SearchSection onSearch={setCity} />
      </main>
    </>
  )
}

export default App
