import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./FilmSuggestions.module.css";

const FilmSuggestions = () => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const { movies } = fetchedData;

  let api = `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`;

  useEffect(() => {
    axios.get(api).then((response) => setFetchedData(response?.data.data));
  }, [api]);

  return (
    <>
      <h2 className="fs-5 mb-5 text-center">Películas sugeridas:</h2>
      {movies?.map((movie) => (
        <Link
          key={movie.id}
          style={{ textDecoration: "none" }}
          to={`/${movie.id}`}
          className="col-lg-6 col-md-6 col-sm-6 col-6 mb-4 position-relative text-light"
        >
          <div
            className={`${styles.suggestions} d-flex flex-column justify-content-center`}
          >
            <img
              className={`${styles.img} img-fluid text-center rounded`}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default FilmSuggestions;
