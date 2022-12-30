import React, { useState, useEffect } from "react";
import Nav from "./common/Nav";
import CountryDetail from "./country/CountryDetail";
import CountryTable from "./country/CountryTable";

const MainPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countryList) => {
        // data is the parsed JSON data
        setCountries(countryList);
      });
  }, []);

  return (
    <div>
      <Nav />
      {selectedCountry && (
        <CountryDetail
          country={selectedCountry}
          onClearCountryClick={() => setSelectedCountry(undefined)}
        />
      )}
      {!selectedCountry && (
        <CountryTable
          countries={countries}
          currentPage={currentPage}
          onCountryClick={(country) => {
            setSelectedCountry(country);
          }}
          onPageClick={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default MainPage;
