import { useContext, useEffect, useState } from "react";
import "./SingleContry.css";
import { Link, useParams } from "react-router-dom";
import { AllCountriesContext } from "../store/Country-details";

const SingleContry = () => {
  const [borders, setBorder] = useState([]);

  const params = useParams();
  const countryURLName = params.country;

  let { allCountryData, theam } = useContext(AllCountriesContext);
  const [countryDataFromContext] = allCountryData.filter((country) =>
    country.name.common.includes(countryURLName)
  );
  const data = countryDataFromContext;

  useEffect(() => {
    if (data?.borders) {
      Promise.all(
        data.borders.map((code) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((res) => res.json())
            .then(([borderCountries]) => borderCountries.name.common);
        })
      ).then((borders) => {
        setBorder(borders);
      });
    }
  }, [data]);

  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3.1/name/${countryURLName}?fullText=true`)
  //     .then((res) => res.json())
  //     .then(([data]) => {
  //       setData(data);
  //       if (data.borders) {
  //         Promise.all(
  //           data.borders.map((code) => {
  //             return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  //               .then((res) => res.json())
  //               .then(([borderCountries]) => borderCountries.name.common);
  //           })
  //         ).then((borders) => {
  //           setData((previousData) => ({
  //             ...previousData,
  //             bordersName: borders,
  //           }));
  //         });
  //       }
  //     })
  //     .catch(() => {
  //       setNotFound(true);
  //     });
  // }, [countryURLName]);

  if (!data) {
    return <div>Country Not Found....</div>;
  }

  return  (
    <main className={`${theam && "dark"}`}>
      <div className="container">
        <span className="back-btn" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
        </span>
      </div>
      <div className="container all-data">
        <img className="country-img" src={`${data.flags.svg}`} />
        <div className=" country-data">
          <h1 className="name">{data.name.common}</h1>
          <div className="country-text">
            <p>
              Native Name:{" "}
              <span>{Object.values(data.name.nativeName)[0].common}</span>
            </p>
            <p>
              Population: <span>{data.population.toLocaleString("en-IN")}</span>
            </p>
            <p>
              Region: <span>{data.region}</span>
            </p>
            <p>
              Sub Region: <span>{data.subregion}</span>
            </p>
            <p>
              Capital: <span>{data.capital}</span>
            </p>
            <p>
              Top Lavel Domain: <span>{data.tld}</span>
            </p>
            <p>
              Currencies:{" "}
              <span>
                {Object.values(data.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </span>
            </p>
            <p>
              Languages: <span>{Object.values(data.languages).join(", ")}</span>
            </p>
          </div>
          {borders && (
            <div className="border-countries">
              <span>Border Countries:</span>
              {borders.map((border) => (
                <Link to={`/${border}`} key={border} className="border">
                  {border}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
    
  );
};

export default SingleContry;
