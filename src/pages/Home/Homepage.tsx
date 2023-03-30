import "./homepage.css";
import { useState } from "react";
import data from "../../data/data.json";
import CountryDataCard from "../../component/cards/CountryDataCard";
import Input from "../../component/main/Input";

function HomPage() {
  // setting default value of countries to data in the json file.
  const [searchedCountry, setSearchedCountry] = useState(data);
  let [errorMessage, setErrorMessage] = useState({
    search: "",
    region: "",
    all: true,
  });

  const handleSearch = (searchValue: string, filterValue: string) => {
    const filteredCountries = data
      .filter((country) =>
        filterValue === "All" || filterValue === ""
          ? country
          : country.region === filterValue
      )
      .filter(
        (country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          country.capital?.toLowerCase().includes(searchValue.toLowerCase())
      );
    if (filteredCountries.length > 0) {
      setSearchedCountry(filteredCountries);
    } else {
      setSearchedCountry([]);
      setErrorMessage({
        search: searchValue,
        region:
          filterValue === "All" || filterValue === "" ? "All" : filterValue,
        all: filterValue === "All" || filterValue === "" ? true : false,
      });
    }
  };

  const handleFilterByRegion = (region: string) => {
    if (region === "All") {
      setSearchedCountry(data);
    } else {
      setSearchedCountry(data.filter((c) => c.region === region));
    }
  };

  return (
    <main className="app_main_container">
      <Input
        onSubmit={handleSearch}
        handleFilterByRegion={handleFilterByRegion}
      />
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
          No result found for your search term{" "}
          <span className="bold_text">"{errorMessage.search}" </span> in the{" "}
          <span className="bold_text">"{`${errorMessage.region}`} </span>
          <span className="bold_text">
            {" "}
            {`${errorMessage.all ? "regions." : "region."}`} "
          </span>{" "}
          Please try searching again with a different region or a different
          search term.
        </p>
      )}
    </main>
  );
}

export default HomPage;
