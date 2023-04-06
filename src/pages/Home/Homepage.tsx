import "./homepage.css";
import { useState } from "react";
import data from "../../data/data.json";
import CountryDataCard from "../../component/cards/CountryDataCard";
import Input from "../../component/main/Input";

function HomePage() {
  // setting default value of countries to data in the json file.
  const [searchedResult, setSearchedResult] = useState(data);
  const [errorObject, setErrorObject] = useState({
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
      setSearchedResult(filteredCountries);
    } else {
      setSearchedResult([]);
      setErrorObject({
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
      setSearchedResult(data);
    } else {
      setSearchedResult(data.filter((country) => country.region === region));
    }
    setCurrentPage(1); // reset current page to 1 after search/filter
  };

  // calculate indexes of countries to display based on current page and countries per page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const totalPages = Math.ceil(searchedResult.length / countriesPerPage);

  const currentCountries = searchedResult.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // create an array of page number from page 1 to totalPages
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <main className="app_main_container">
      <Input
        onChange={handleSearch}
        handleFilterByRegion={handleFilterByRegion}
      />
      {searchedResult.length > 0 ? (
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
              className={`hide_on_desktop ${
                currentPage <= 1 && "disabled_btn"
              }`}
              onClick={handlePrev}
              disabled={currentPage >= totalPages ? true : false}
            >
              &larr; prev
            </button>
            {pageNumbers.map((nPage, index) => (
              <button
                key={index}
                className={`page ${nPage === currentPage && "active"}`}
                onClick={() => setCurrentPage(nPage)}
              >
                {nPage}
              </button>
            ))}
            <button
              className={`hide_on_desktop ${
                currentPage >= totalPages && "disabled_btn"
              }`}
              onClick={handleNext}
              disabled={currentPage >= totalPages ? true : false}
            >
              next &rarr;
            </button>
          </div>
        </div>
      ) : (
        <p className="error_message">
          No result found for your search term{" "}
          <span className="bold_text">"{errorObject.search}" </span> in the{" "}
          <span className="bold_text">{`${errorObject.region}`} </span>
          <span className="bold_text">
            {" "}
            {`${errorObject.all ? "regions." : "region."}`}
          </span>{" "}
          Please try searching again with a different region or a different
          search term.
        </p>
      )}
    </main>
  );
}

export default HomePage;
