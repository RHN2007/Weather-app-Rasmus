import { useEffect, useState } from "react"


export default function useFetchData(url) { // dette skal ikke være en async function, kun på selve fetchdata functionen inde i useeffecten.

    const [fetchedData, setFetchedData] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(url)
            let data = await response.json()
            setFetchedData(data)
        }
        fetchData()
    }, [url])

    return fetchedData ? (fetchedData) : ("")
}