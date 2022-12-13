import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ movieCount, pageNumber, setPageNumber, pageLimit }) => {
  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <ReactPaginate
        className="pagination pagination-sm justify-content-center my-4 pb-2 gap-2 text-light"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-6 my-auto prev"
        nextClassName="btn btn-primary fs-6 my-auto next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 1}
        pageRangeDisplayed={width < 576 ? 1 : 6}
        pageCount={Math.ceil(movieCount / pageLimit)}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
