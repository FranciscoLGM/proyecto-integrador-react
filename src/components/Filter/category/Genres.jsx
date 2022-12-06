import React from "react";
import FilterBTN from "../FilterBTN.jsx";
import styles from "./category.module.css";

const Genres = ({ setGenre, setPageNumber }) => {
  let genres = [
    "Todos",
    "Acción",
    "Animación",
    "Aventura",
    "Biografía",
    "Bélico",
    "Ciencia Ficción",
    "Cine negro",
    "Comedia",
    "Concurso",
    "Crimen",
    "Del oeste",
    "Deporte",
    "Documental",
    "Drama",
    "Familia",
    "Fantasía",
    "Historia",
    "Misterio",
    "Musical",
    "Música",
    "Noticias",
    "Reality",
    "Romance",
    "Suspenso",
    "Terror",
    "Tertulia",
  ];
  return (
    <div className="dropdown">
      <button
        style={{
          width: "203px",
          backgroundColor: "#282828",
          border: "2px solid #282828",
        }}
        className={`${styles.btn} btn text-light dropdown-toggle`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Género:
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {genres.map((item, index) => {
          return (
            <li key={index} className="dropdown-item">
              <FilterBTN
                key={index}
                index={index}
                name="genres"
                task={setGenre}
                setPageNumber={setPageNumber}
                input={item}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Genres;
