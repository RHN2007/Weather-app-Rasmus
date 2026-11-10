import './SearchForm.css'

export default function SearchForm ({ onSearch }) {

    function handleSearch (event) {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const searchedCity = formData.get("search")

        onSearch(searchedCity)
    }

    return (
        <form onSubmit={handleSearch} className="form__search">
            <input className='form__city' type="text" name="search" placeholder="Skriv en by, fx København" />
            <input className='form__submit' type="submit" value="Søg vejr" />
        </form>
    )
}