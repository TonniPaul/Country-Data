import "./countryDataCard.css";

interface Props {
  flag: string;
  country: string;
  population: number;
  region: string;
  capital?: string;
}
function addCommasToNumber(num: number): string {
  return num.toLocaleString();
}

const CountryDataCard = ({
  flag,
  country,
  population,
  region,
  capital,
}: Props) => {
  const formattedValue = addCommasToNumber(population);
  return (
    <div className="card_main_container">
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
    </div>
  );
};

export default CountryDataCard;
