import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./FilmDetail.css";
import noPoster from "../../assets/images/noposter.svg";
import notFound from "../../assets/images/notfound.jpg";
import defaultUser from "../../assets/images/defaultuser.png";

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
        backgroundImage: `linear-gradient(
          115deg,
          rgba(29, 29, 29, 0.8),
          rgba(29, 29, 29, 0.7)
      ), url(${background_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <main className="container">
        <section className="grid-film gap-5 pt-4 text-light">
          <picture className="text-center fw-semibold fs-5">
            <img
              className="img-fluid border border-3 rounded"
              src={large_cover_image || noPoster}
              alt={title}
            />
          </picture>

          <div>
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
              <ul className="d-flex flex-wrap gap-3 list-unstyled">
                {torrents?.map((torrent, index) => (
                  <li key={index}>
                    <a className="btn btn-light mt-2" href={torrent.url}>
                      {`${torrent.quality}.${
                        torrent.type.charAt(0).toUpperCase() +
                        torrent.type.slice(1)
                      }`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row">
            <FilmSuggestions />
          </div>
        </section>

        <section className="grid-trailer gap-5 mt-5 text-light">
          <div>
            <h2 className="pb-3 pt-3 fw-bold">Trailer</h2>
            <iframe
              src={(() => {
                return yt_trailer_code?.length > 1
                  ? `https://www.youtube.com/embed/${yt_trailer_code}`
                  : notFound;
              })()}
              title="YouTube video player"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div>
            <h2 className="pb-3 pt-3 fw-bold">Imágenes</h2>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={large_screenshot_image1}
                    className="d-block w-100 rounded"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={large_screenshot_image2}
                    className="d-block w-100 rounded"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={large_screenshot_image3}
                    className="d-block w-100 rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid-argument gap-5 mt-5 pb-4 text-light">
          <div>
            <h2 className="pb-3 pt-3 fw-bold">Argumento</h2>
            <p className="argument">{description_full}</p>
          </div>

          <div>
            <h2 className="pb-3 pt-3 fw-bold">Reparto principal</h2>
            <>
              {cast?.map((cast, index) => (
                <div
                  key={index}
                  className="d-flex flex-wrap align-items-center gap-2"
                >
                  <img
                    className="cast img-fluid rounded-circle border border-light mb-2"
                    src={cast.url_small_image || defaultUser}
                    alt=""
                  />
                  <p className="fs-6">
                    <span className="text-secondary fw-normal">
                      {cast.name}
                    </span>
                    {(() => {
                      return cast.character_name.length > 1 ? (
                        <span>{` como ${cast.character_name}`}</span>
                      ) : (
                        ""
                      );
                    })()}
                  </p>
                </div>
              ))}
            </>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FilmDetail;
