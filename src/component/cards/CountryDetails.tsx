import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./countryDetails.css";

const addCommasToNumber = (num: number): string => num.toLocaleString();

function CountryDetails() {
  const { countryCode } = useParams();

  // Find the country in the data array using the countryCode parameter
  const country = data.find((country) => country.alpha3Code === countryCode);

  return (
    <div>
      <img src={country?.flag} alt="" className="country_detail_flag" />
      <h3>{country?.name}</h3>
      <p>
        <span className="bold_text">Native Name :</span> {country?.nativeName}
      </p>
      <p>
        <span className="bold_text">Population :</span>
        {country?.population.toLocaleString()}
      </p>
      <p>
        <span className="bold_text">Region:</span> {country?.region}
      </p>
      <p>
        <span className="bold_text">Sub Region :</span> {country?.subregion}
      </p>
      <p>
        <span className="bold_text">Capital :</span> {country?.capital}
      </p>
      <p>
        Languages:{" "}
        {country?.languages.map((language) => language.name).join(", ")}
      </p>
      <p>
        Currencies:{" "}
        {country?.currencies?.map((currency) => currency.name).join(", ")}
      </p>
    </div>
  );
}

export default CountryDetails;
