import React from "react";

function CountryDetail(props) {
  const { country, onClearCountryClick } = props;
  return (
    <div className="country-detail-card" key={country.name.official}>
      <h2>{country.name.official}</h2>
      <small>{country.region}</small>
      <p key={country.name.official}>
        {" "}
        The country belongs to {country.region} region and {country.subregion}{" "}
        sub-region. This country has population of {country.population}.
      </p>
      <button
        className="country-back-button"
        onClick={() => onClearCountryClick()}
      >
        {"<"}
      </button>
    </div>
  );
}

export default CountryDetail;
