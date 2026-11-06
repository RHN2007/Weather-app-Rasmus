import SearchForm from "../SearchForm/SearchForm";

export default function SearchSection ({ onSearch }) {
    return (
        <section>
            <h1>Hvordan er vejret?</h1>
            <p>Søg efter en by, og få det aktuelle vejr med det samme.</p>
            <SearchForm onSearch={onSearch} />
        </section>
    )
}