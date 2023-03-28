import "./App.css";
import { useState } from "react";
import CountryDataCard from "./component/cards/CountryDataCard";
import Input from "./component/main/Input";
import Navbar from "./component/navbar/Navbar";
import data from "./data/data.json";

function App() {
  const [searchedCountry, setSearchedCountry] = useState(data);
  let [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (searchValue: string) => {
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filteredCountries.length > 0) {
      setSearchedCountry(filteredCountries);
    } else {
      setSearchedCountry([]);
      setErrorMessage(
        `No results found for "${searchValue}". Please try again with a different search term.`
      );
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main className="app_main_container">
        <Input onSubmit={handleSearch} />
        {searchedCountry.length > 0 ? (
          <div className="app_data">
            {searchedCountry.map((data, index) => {
              return (
                <CountryDataCard
                  key={index}
                  flag={data.flag}
                  country={data.name}
                  population={data.population}
                  region={data.region}
                  capital={data.capital}
                />
              );
            })}
          </div>
        ) : (
          <p> {errorMessage} </p>
        )}
      </main>
    </div>
  );
}

export default App;
