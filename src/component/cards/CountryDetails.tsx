import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./countryDetails.css";


function CountryDetails() {
  const { countryCode } = useParams();

  // Find the country in the data array using the countryCode parameter
  const country = data.find((country) => country.alpha3Code === countryCode);

  return (
    <div className="county_details_main">
      <img src={country?.flag} alt="" className="country_detail_flag" />
      <div className="country_details_data_container">
        <h3 className="country_details_header">{country?.name}</h3>
        <div className="card_details_sub_div">
          <div className="card_details_data_container">
            <p>
              <span className="bold_text">Native Name :</span>{" "}
              {country?.nativeName}
            </p>
            <p>
              <span className="bold_text">Population :</span>
              {country?.population.toLocaleString()}
            </p>
            <p>
              <span className="bold_text">Region:</span> {country?.region}
            </p>
            <p>
              <span className="bold_text">Sub Region :</span>{" "}
              {country?.subregion}
            </p>
            <p>
              <span className="bold_text">Capital :</span> {country?.capital}
            </p>
          </div>
          <div className="card_details_data_container">
            <p>
              <span className="bold_text">Top Level Domain :</span>{" "}
              {country?.topLevelDomain}
            </p>
            <p>
              <span className="bold_text">Currencies :</span>{" "}
              {country?.currencies?.map((item) => {
                return <span key={item.code}>{item.name}</span>;
              })}
            </p>

            <p>
              <span className="bold_text">Languages :</span>{" "}
              {country?.languages?.map((language) => language.name).join(", ")}
            </p>
          </div>
        </div>
        {country?.borders && (
          <div className="card_details_data_container card_details_last_child">
            <h4 className="country_border">Border Countries :</h4>
            <p className="border_country_name">
              {country?.borders?.map((item) => {
                return <span className="country_names">{item}</span>;
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
