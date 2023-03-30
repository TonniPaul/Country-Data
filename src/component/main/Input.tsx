import React, { useState } from "react";
import "./input.css";

interface InputProps {
  onSubmit: (searchValue: string, filterValue: string) => void;
  handleFilterByRegion: (filterValue: string) => void;
}

const Input = ({ onSubmit, handleFilterByRegion }: InputProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
    handleFilterByRegion(e.target.value);
    setSearchValue("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchValue.length === 0 && setSearchValue("");
    onSubmit(searchValue, filterValue);
  };

  return (
    <div className="input_main_container">
      <form className="input_form" onSubmit={handleSubmit}>
        <img
          src="/assets/search-icon.svg"
          alt="search-icon"
          className="search_icon"
        />
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
          className="input"
          onChange={handleSearch}
          value={searchValue}
        />
      </form>

      <form className="filter_form" onSubmit={handleSubmit}>
        <select
          name="continent"
          id="continent"
          onChange={handleSelectedFilter}
          value={filterValue}
        >
          <option selected hidden>
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <img src="/assets/dropdown-icon.svg" alt="dropdown" />
      </form>
    </div>
  );
};

export default Input;
