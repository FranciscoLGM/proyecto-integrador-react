import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./FilmDetail.css";
import noPoster from "../../assets/images/noposter.svg";

// Components

import FilmSuggestions from "../FilmSuggestions/FilmSuggestions";

const FilmDetail = () => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const {
    large_cover_image,
    title,
    language,
    year,
    genres,
    rating,
    like_count,
    download_count,
    date_uploaded,
    torrents,
    yt_trailer_code,
    description_full,
    background_image,
    large_screenshot_image1,
    large_screenshot_image2,
    large_screenshot_image3,
    cast,
  } = fetchedData;

  let api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

  useEffect(() => {
    axios
      .get(api)
      .then((response) => setFetchedData(response?.data.data.movie));
  }, [api]);

  return (
    <div
      style={{
        backgroundImage: `URL(${background_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <main className="container">
        <section className="grid-film gap-5 pt-4 text-light">
          <article className="border border-3 rounded text-center fw-semibold">
            <img
              className="img-fluid fs-5"
              src={large_cover_image || noPoster}
              alt={title}
            />
          </article>

          <article>
            <h1 className="fw-bold">{title}</h1>
            <h2 className="fs-5 mb-2 mt-4">{`Año: ${year}`}</h2>
            <h2 className="fs-5 mb-2">{`Idioma: ${language?.toUpperCase()}`}</h2>
            <h2 className="fs-5 mb-2">{`Género: ${String(genres)
              .split(",")
              .join("/")}`}</h2>
            <h2 className="fs-5 mb-2">{`Calificación: ${rating}`}</h2>
            <h2 className="fs-5 mb-2">{`Descargas: ${download_count}`}</h2>
            <h2 className="fs-5 mb-2">{`Likes: ${like_count}`}</h2>
            <h2 className="fs-5 mb-5">{`Subida el: ${date_uploaded
              ?.split(" ")
              .slice(0, 1)
              .join("-")
              .split("-")
              .reverse()
              .join("/")}`}</h2>
            <h2 className="fs-5 mb-2">Disponible en:</h2>
            <div>
              <ul className="d-flex gap-3 nav">
                {torrents?.map((torrent, index) => (
                  <li key={index}>
                    <a className="btn btn-dark mt-2" href={torrent.url}>
                      {`${torrent.quality}.${
                        torrent.type.charAt(0).toUpperCase() +
                        torrent.type.slice(1)
                      }`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="row">
            <FilmSuggestions />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FilmDetail;
