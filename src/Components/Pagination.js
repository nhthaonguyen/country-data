import React from "react";

const Pagination = ({ countriesPerPage, totalItems, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalItems / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumber.map((number) => (
        <button key={number} className="pagination-button">
          <a onClick={() => paginate(number)}>{number}</a>
        </button>
      ))}
    </ul>
  );
};

export default Pagination;
