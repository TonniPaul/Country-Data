import "./countryDataCard.css";
import { Link } from "react-router-dom";

interface Props {
  flag: string;
  country: string;
  population: number;
  region: string;
  capital?: string;
  alpha3Code: string;
}

const addCommasToNumber = (num: number): string => num.toLocaleString();

const CountryDataCard = ({
  flag,
  country,
  population,
  region,
  capital,
  alpha3Code,
}: Props) => {
  const formattedValue = addCommasToNumber(population);

  return (
    <Link to={`/country/${alpha3Code}`} className="card_main_container">
      <div className="country_flag_container">
        <img src={flag} alt={`${country} flag`} className="country_flag" />
      </div>
      <div className="country_data_container">
        <h3 className="country_name"> {country} </h3>

        <div className="country_data_sub_container">
          <p className="data_text">
            <span className="bold_text">Population : </span>
            {formattedValue}
          </p>
          <p className="data_text">
            <span className="bold_text">Region : </span> {region}
          </p>
          <p className="data_text">
            <span className="bold_text">Capital : </span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryDataCard;
