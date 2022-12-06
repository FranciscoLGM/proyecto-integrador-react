import React from "react";
import FilterBTN from "../FilterBTN.jsx";
import styles from "./category.module.css";

const Quality = ({ setQuality, setPageNumber }) => {
  let quality = ["Todos", "480p", "720p", "1080p", "2160p", "3D"];
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
        Calidad:
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {quality.map((item, index) => {
          return (
            <li key={index} className="dropdown-item">
              <FilterBTN
                name="quality"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setQuality}
                input={item}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quality;
