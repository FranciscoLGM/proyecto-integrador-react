import React from "react";
import FilterBTN from "../FilterBTN.jsx";
import styles from "./category.module.css";

const Rating = ({ setRating, setPageNumber }) => {
  let rating = ["Todos", "9+", "8+", "7+", "6+", "5+", "4+", "3+", "2+", "1+"];
  return (
    <div className="dropdown">
      <button
        style={{
          width: "158px",
          backgroundColor: "#282828",
          border: "2px solid #282828",
        }}
        className={`${styles.btn} btn text-light dropdown-toggle`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Clasificación:
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {rating.map((item, index) => {
          return (
            <li key={index} className="dropdown-item">
              <FilterBTN
                name="rating"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setRating}
                input={item}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rating;
