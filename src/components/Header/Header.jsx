import weather_icon from '../../assets/weather-icon.svg'
import './Header.css'
import '../../shared.css'

export default function Header() {
    return (
        <header className='header font'>
            <div className='header__left'>
                <figure>
                    <img src={weather_icon} alt="Weather Icon" />
                </figure>
                <div className='header__text'>
                    <h1>Vejrblik</h1>
                    <p>Dit lokale vejr</p>
                </div>
            </div>
            <div className='header__right'>
                <button>Darkmode</button>
                <p>Dansk vejr · °C</p>
            </div>
        </header>
    )
}