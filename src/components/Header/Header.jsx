import weather_icon from '../../assets/weather-icon.svg'

export default function Header () {
    return (
        <header>
            <div>
                <figure>
                <img src={weather_icon} alt="Weather Icon" />
                </figure>
                <p>Vejrblik</p>
                <p>Dit lokale vejr</p>
            </div>
            <div>
                <button>Darkmode</button>
                <p>Dansk vejr · °C</p>
            </div>
        </header>
    )
}