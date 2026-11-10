import SearchForm from "../SearchForm/SearchForm";
import './SearchSection.css'

export default function SearchSection ({ onSearch }) {
    return (
        <section className="section__search font">
            <h2>Hvordan er vejret?</h2>
            <p>Søg efter en by, og få det aktuelle vejr med det samme.</p>
            <SearchForm onSearch={onSearch} />
        </section>
    )
}