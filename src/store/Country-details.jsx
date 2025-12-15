import { createContext, useEffect, useState } from "react";

export const AllCountriesContext = createContext();

const AllCountryDataProvider = ({ children }) => {

  const [theam, setTheam] = useState(JSON.parse(localStorage.getItem("theam")));
  const [allCountryData, setAllCountryData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent")
      .then((res) => res.json())
      .then((data) => {
        setAllCountryData(data);
      });
  }, []);

  return (
    <AllCountriesContext.Provider value={{allCountryData,theam, setTheam}}>
      {children}
    </AllCountriesContext.Provider>
  );
};

export default AllCountryDataProvider;
