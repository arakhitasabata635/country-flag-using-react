import { useContext } from "react";
import { AllCountriesContext } from "../store/Country-details";

function Header() {
  const { setTheam, theam } = useContext(AllCountriesContext);
  return (
    <header className={`header ${theam && "dark"}   `}>
      <div className="container">
        <h2 className="header-title">Where in the world?</h2>
        <p
          className="dark-mode"
          onClick={() => {
            localStorage.setItem("theam", !theam);
            setTheam(!theam);
          }}
        >
          <i className={`fa-regular fa-${theam ? "sun" : "moon"}`}></i>&nbsp;
          {theam ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}

export default Header;
