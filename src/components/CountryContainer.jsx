import { useContext } from "react";
import CountryCard from "./countryCard";
import CountryContainerShimerEffect from "./CountryContainerShimerEffect";
import { AllCountriesContext } from "../store/Country-details";

const CountryContainer = ({ querry }) => {
  let { allCountryData } = useContext(AllCountriesContext);
  if (allCountryData.length === 0) {
    return <CountryContainerShimerEffect />;
  }

  return (
    <div className="country">
      <div className="container">
        {allCountryData
          .filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .includes(querry.toLowerCase()) ||
              country.region.toLowerCase().includes(querry.toLowerCase())
          )
          .map((countryDetails) => (
            <CountryCard
              key={countryDetails.name.common}
              countryDetails={countryDetails}
            ></CountryCard>
          ))}
      </div>
    </div>
  );
};

export default CountryContainer;
