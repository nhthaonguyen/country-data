import React, { useState, useEffect } from "react";
import CountryDetail from "./CountryDetail";
import CountryTable from "./CountryTable";

const MainPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countryList) => {
        // data is the parsed JSON data
        setCountries(countryList);
      });
  }, []);

  if (selectedCountry !== undefined) {
    return (
      <CountryDetail
        country={selectedCountry}
        onClearCountryClick={() => setSelectedCountry(undefined)}
      />
    );
  }

  return (
    <CountryTable
      countries={countries}
      onCountryClick={(country) => {
        setSelectedCountry(country);
      }}
    />
  );
};

export default MainPage;
