import React from "react";

const ArrowButton = (props) => {
  return (
    <>
      <button className="d-flex justify-content-center align-items-center6n btn-light " onClick={props.handleClick}>
        {props.ArrowText} {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </button>
    </>
  );
};

export default ArrowButton;
