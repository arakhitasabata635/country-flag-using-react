import { Link } from "react-router-dom";

const CountryCard = ({ countryDetails }) => {
  return (
    <Link className="country-div" to={`./${countryDetails.name.common}`}>
      <div className="img-container">
        <img src={countryDetails.flags.svg} />
      </div>
      <div className="country-details">
        <h3 className="name">{countryDetails.name.common}</h3>
        <p>
          Population:{" "}
          <span>{countryDetails.population.toLocaleString("en-IN")}</span>
        </p>
        <p>
          Region: <span>{countryDetails.region}</span>
        </p>
        <p>
          Capital: <span>{countryDetails.capital?.[0]}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
