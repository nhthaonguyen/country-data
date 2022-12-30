import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ countriesPerPage, totalItems, onPageClick }) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalItems / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className={styles.pagination}>
      {pageNumber.map((number) => (
        <button key={number} className={styles.paginationButton}>
          <a onClick={() => onPageClick(number)}>{number}</a>
        </button>
      ))}
    </ul>
  );
};

export default Pagination;
