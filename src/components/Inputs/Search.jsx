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
      <button className={styles.search__btn}>Search</button>
    </div>
  );
}
