import React from "react";

function Button(props) {
  const { onClick } = props;
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="country-detail-button"
    >
      {">"}
    </button>
  );
}

export default Button;
