import "./countryPage.css";
import CountryDetails from "../../component/cards/CountryDetails";
import { useNavigate } from "react-router-dom";

const CountryPage = () => {
  const goBack = useNavigate();

  const handleButtonClick = () => goBack(-1);

  return (
    <div className="country_details_container">
      <button className="go_back" onClick={handleButtonClick}>
        <img src="/assets/back-icon.svg" alt="back-icon" />
        Back
      </button>
      <CountryDetails />
    </div>
  );
};

export default CountryPage;
