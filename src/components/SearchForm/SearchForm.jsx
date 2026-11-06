import { useState } from "react"
import useFetchData from "../../Hooks/useFetchData"
import useWeather from "../../Hooks/UseWeather"

export default function SearchForm ({ onSearch }) {

    function handleSearch (event) {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const searchedCity = formData.get("search")

        onSearch(searchedCity)


        // const searchURL = new URL(baseGeocodingURL)

        // searchURL.searchParams.set("q", searchedCity)
        // searchURL.searchParams.set("appid", apiKey)

        // setGeoURL(searchURL)
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Skriv en by, fx København" />
            <input type="submit" value="Søg vejr" />
        </form>
    )
}