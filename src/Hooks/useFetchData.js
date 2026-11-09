import { useEffect, useState } from "react"

export default function useFetchData(url) {
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        if (!url) { // hvis vi har ingen url så set fetcheddata til at være null og return (vi vil ikke fetch ingenting)
            setFetchedData(null)
            return
        }

        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()

            setFetchedData(data)
        }

        fetchData()
    }, [url])

    return fetchedData
}