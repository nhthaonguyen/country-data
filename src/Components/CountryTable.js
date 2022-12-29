import React, { useState } from "react";
import Button from "./Button";
import Nav from "./Nav";
import Pagination from "./Pagination";

function CountryTable(props) {
  const { countries, onCountryClick } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 5;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * countriesPerPage;
  const indexOfFirstItem = indexOfLastItem - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = countries.length;

  return (
    <div>
      <div>
        <Nav />
      </div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {currentCountries.map((country) => (
            <tr key={country.name.official}>
              <td>
                <img src={country.flags.png} />
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
                <Button onClick={() => onCountryClick(country)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </div>
  );
}

export default CountryTable;
