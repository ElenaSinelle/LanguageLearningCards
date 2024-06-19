import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="search"
        id="search-field"
        placeholder="Search"
      />
      <button
        className={styles.search__btn}
        // style={{
        //   position: "absolute",
        //   top: 0,
        //   right: 0,
        // }}
      >
        Search
      </button>
    </div>
  );
}
