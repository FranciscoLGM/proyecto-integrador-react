import React from "react";
import FilterBTN from "../FilterBTN.jsx";
import styles from "./category.module.css";

const SortBy = ({ setSortBy, setPageNumber }) => {
  let sortBy = [
    "Todos",
    "Año",
    "Calificación",
    "Descargas",
    "Fecha de subida",
    "Likes",
    "Título",
  ];
  return (
    <div className="dropdown">
      <button
        style={{
          width: "215px",
          backgroundColor: "#282828",
          border: "2px solid #282828",
        }}
        className={`${styles.btn} btn text-light dropdown-toggle`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Ordenar por:
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {sortBy.map((item, index) => {
          return (
            <li key={index} className="dropdown-item">
              <FilterBTN
                name="sortBy"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setSortBy}
                input={item}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortBy;
