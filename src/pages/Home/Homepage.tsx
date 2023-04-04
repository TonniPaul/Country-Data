import "./homepage.css";
import { useState } from "react";
import data from "../../data/data.json";
import CountryDataCard from "../../component/cards/CountryDataCard";
import Input from "../../component/main/Input";

function HomePage() {
  // setting default value of countries to data in the json file.
  const [searchedCountry, setSearchedCountry] = useState(data);
  const [errorMessage, setErrorMessage] = useState({
    search: "",
    region: "",
    all: true,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(13);

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
    setCurrentPage(1); // reset current page to 1 after search/filter
  };

  const handleFilterByRegion = (region: string) => {
    if (region === "All") {
      setSearchedCountry(data);
    } else {
      setSearchedCountry(data.filter((country) => country.region === region));
    }
    setCurrentPage(1); // reset current page to 1 after search/filter
  };

  // calculate indexes of countries to display based on current page and countries per page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = searchedCountry.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <main className="app_main_container">
      <Input
        onChange={handleSearch}
        handleFilterByRegion={handleFilterByRegion}
      />
      {searchedCountry.length > 0 ? (
        <div className="app_data_main">
          <div className="app_data">
            {currentCountries.map((data) => {
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
          <div className="pagination">
            <button
              className={`prev ${currentPage === 1 && "disabled_btn"}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &larr; Prev
            </button>
            <button
              className={`next ${
                indexOfLastCountry >= searchedCountry.length && "disabled_btn"
              }`}
              onClick={handleNextPage}
              disabled={indexOfLastCountry >= searchedCountry.length}
            >
              Next &rarr;
            </button>
          </div>
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

export default HomePage;
