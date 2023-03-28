import "./homepage.css";
import { useState } from "react";
import data from "../../data/data.json";
import CountryDataCard from "../../component/cards/CountryDataCard";
import Input from "../../component/main/Input";

function App() {
  const [searchedCountry, setSearchedCountry] = useState(data);
  let [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (searchValue: string) => {
    const filteredCountries = data.filter(
      (country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.capital?.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filteredCountries.length > 0) {
      setSearchedCountry(filteredCountries);
    } else {
      setSearchedCountry([]);
      setErrorMessage(searchValue);
    }
  };

  return (
    <main className="app_main_container">
      <Input onSubmit={handleSearch} />
      {searchedCountry.length > 0 ? (
        <div className="app_data">
          {searchedCountry.map((data) => {
            return (
              <CountryDataCard
                key={data.alpha3Code}
                flag={data.flag}
                country={data.name}
                population={data.population}
                region={data.region}
                capital={data.capital}
                alpha3Code={data.alpha3Code}
              />
            );
          })}
        </div>
      ) : (
        <p className="error_message">
          No results found for{" "}
          <span className="bold_text">"{errorMessage}" </span> Please try again
          with a different search term.{" "}
        </p>
      )}
    </main>
  );
}

export default App;
