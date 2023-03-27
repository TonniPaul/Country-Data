import "./input.css";

const Input = () => {
  return (
    <div className="input_main_container">
      <form className="input_form">
        <img src="/assets/search-icon.svg" alt="" className="search_icon" />
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
          className="input"
        />
      </form>

      <form action="#">
        <select name="continent" id="continent">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Input;
