import "./countryDataCard.css";

interface Props {
  flag: string;
  country: string;
  population: number;
  region: string;
  capital: string;
}

const CountryDataCard = () => {
  return (
    <div className="card_main_container">
      <div className="country_flag_container">
        <img
          src="https://flagcdn.com/as.svg"
          alt="country"
          className="country_flag"
        />
        <div className="country_data_container">
          <h3 className="country_name">Germany</h3>

          <div className="country_data_sub_container">
            <p className="data_text">
              <span className="bold_text">Population : </span>81,000,000
            </p>
            <p className="data_text">
              <span className="bold_text">Region : </span> Europe
            </p>
            <p className="data_text">
              <span className="bold_text">Capital : </span>Balablu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDataCard;
