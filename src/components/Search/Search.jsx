import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  let searchBtn = (ev) => {
    ev.preventDefault();
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-between gap-4 mb-4`}
    >
      <input
        onChange={(ev) => {
          setPageNumber(1);
          setSearch(ev.target.value);
        }}
        placeholder="Buscar películas"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Búsqueda
      </button>
    </form>
  );
};

export default Search;
