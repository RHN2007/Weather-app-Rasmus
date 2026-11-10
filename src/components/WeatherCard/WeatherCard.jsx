export default function WeatherCard({ weather }) {

    return (
        <>
            {weather ?
                ( // if true
                    <>
                    <section>
                        <h3>{weather.name}</h3>
                        <p>Det er {weather.main.temp} celsius</p>
                        <p>Men føles som {weather.main.feels_like} celsius</p>
                        <p>{weather.weather[0].description}</p>
                    </section>
                    </>
                )
                :
                ( // if false
                    <>
                        <section>
                            <h3>Indtast venligst en by.</h3>
                        </section>
                    </>
                )}
        </>
    )
}