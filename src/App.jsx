import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllCountryDataProvider from "./store/Country-details";

function App() {
  return (
    <>
    <AllCountryDataProvider>
      <Header />
      <Outlet />
      </AllCountryDataProvider>
    </>
  );
}

export default App;
