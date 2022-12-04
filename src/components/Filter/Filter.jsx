import React from "react";
import Genres from "./category/Genres";
import Quality from "./category/Quality";
import Rating from "./category/Rating";
import SortBy from "./category/SortBy";

const Filter = ({
  pageNumber,
  setPageNumber,
  setGenre,
  setQuality,
  setRating,
  setSortBy,
}) => {
  let clear = () => {
    setGenre("");
    setQuality("");
    setRating("");
    setSortBy("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-12 col-12 mb-5">
      <div
        className="accordion d-flex justify-content-between gap-3"
        id="accordionExample"
      >
        <Quality setPageNumber={setPageNumber} setQuality={setQuality} />
        <Rating setPageNumber={setPageNumber} setRating={setRating} />
        <Genres setPageNumber={setPageNumber} setGenre={setGenre} />
        <SortBy setPageNumber={setPageNumber} setSortBy={setSortBy} />
        <div onClick={clear} className="btn btn-primary">
          Limpiar filtros
        </div>
      </div>
    </div>
  );
};

export default Filter;
