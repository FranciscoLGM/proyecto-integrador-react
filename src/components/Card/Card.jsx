import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ page, results }) => {
  let display;
  if (results) {
    display = results?.map((movie) => {
      const { id, medium_cover_image, title, year, language } = movie;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 position-relative text-light"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center text-center fw-semibold`}
          >
            <img
              className={`${styles.img} img-fluid`}
              src={medium_cover_image}
              alt={""}
            />
          </div>
          <div className={`${styles.content}`}>
            <div className="fs-6 fw-bold pt-2">
              <span
                className={`${styles.language}`}
              >{`[${language.toUpperCase()}] `}</span>
              {title}
            </div>
            <div className="fs-6">{year}</div>
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <span className="text-center text-light fs-4">
        Películas no encontradas 😓
      </span>
    );
  }

  return <>{display}</>;
};
export default Card;
