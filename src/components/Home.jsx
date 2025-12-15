import { useContext, useState } from "react";
import CountryContainer from "./CountryContainer";
import FilterByResion from "./FilterByResion";
import SearchInput from "./SearchInput";
import { AllCountriesContext } from "../store/Country-details";

const Home = () => {
  const { theam} =useContext(AllCountriesContext);
  const [querry, setQuerry] = useState("");

  return (
    <div className={`search-filter ${theam && "dark"} `}  >
      <div className="container">
        <SearchInput setQuerry={setQuerry}></SearchInput>
        <FilterByResion setQuerry={setQuerry}></FilterByResion>
      </div>
      <CountryContainer querry={querry}></CountryContainer>
    </div>
  );
};

export default Home;
