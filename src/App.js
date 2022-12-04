import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Card from "./components/Card/Card.jsx";
import Filter from "./components/Filter/Filter";
// import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const { movie_count, movies } = fetchedData;
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [quality, setQuality] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const pageLimit = 20;

  let api = ` https://yts.mx/api/v2/list_movies.json?page=${pageNumber}&query_term=${search}&limit=${pageLimit}&quality=${quality}&genre=${genre}&minimum_rating=${rating}&sort_by=${sortBy}`;

  useEffect(() => {
    axios.get(api).then((response) => setFetchedData(response.data?.data));
  }, [api]);
  return (
    <div className="App">
      <header className="row p-3">
        <section>
          <div className="container text-light fw-bold fs-4 mb-4 mt-4 ps-5 pe-5">
            Términos de búsqueda:
          </div>
          <article className="container ps-5 pe-5">
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
          </article>
          <article className="container ps-5 pe-5">
            <Filter
              pageNumber={pageNumber}
              setGenre={setGenre}
              setQuality={setQuality}
              setRating={setRating}
              setSortBy={setSortBy}
              setPageNumber={setPageNumber}
            />
          </article>
        </section>
      </header>
      <main className="container">
        <h1 className="text-center text-light mb-3 mt-3">Películas</h1>
        <Pagination
          movieCount={movie_count}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageLimit={pageLimit}
        />

        <div className="col-lg-12 col-12">
          <div className="row d-flex justify-content-center">
            <Card results={movies} />
          </div>
        </div>

        <Pagination
          movieCount={movie_count}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageLimit={pageLimit}
        />
      </main>
    </div>
  );
}

export default App;
