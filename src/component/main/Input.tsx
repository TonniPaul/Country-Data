import { useState } from "react";
import "./input.css";

interface InputProps {
  onSubmit: (searchValue: string) => void;
}

const Input = ({ onSubmit }: InputProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchValue);
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

      <form className="filter_form">
        <select name="continent" id="continent">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
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
