import { useState } from "react"
import Header from "./components/Header/Header"
import SearchSection from "./components/SearchSection/SearchSection"
import useWeather from "./Hooks/UseWeather"

function App() {
  const [city, setCity] = useState("")
  const { weather, error } = useWeather(city)

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
