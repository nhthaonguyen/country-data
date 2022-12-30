import React from "react";
import Button from "../common/Button";
import Nav from "../common/Nav";
import Pagination from "../common/Pagination";
import styles from "./CountryTable.module.css";

function CountryTable(props) {
  const { countries, currentPage, onPageClick, onCountryClick } = props;
  const countriesPerPage = 5;
  const indexOfLastItem = currentPage * countriesPerPage;
  const indexOfFirstItem = indexOfLastItem - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = countries.length;

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentCountries.map((country) => (
            <tr key={country.name.official}>
              <td>
                <img className={styles.flag} src={country.flags.png} />
              </td>
              <td>{country.name.official}</td>
              <td>{country.region}</td>
              <td>{country.population.toLocaleString()}</td>
              <td>
                {country.languages ? (
                  Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </td>
              <td>
                <Button onClick={() => onCountryClick(country)}>{">"}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalItems={totalItems}
        onPageClick={(pageNumber) => onPageClick(pageNumber)}
      />
    </div>
  );
}

export default CountryTable;
