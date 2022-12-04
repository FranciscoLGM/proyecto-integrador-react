import React from "react";
import FilterBTN from "../FilterBTN";

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
          width: "202px",
          backgroundColor: "#282828",
          border: "2px solid #0b5ed7",
        }}
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Género:
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {genres.map((item, index) => {
          return (
            <li className="dropdown-item">
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
