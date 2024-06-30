import styles from "./Search.module.scss";
import { useState } from "react";

export default function Search({ setSearchParams, query, startsFrom }) {
  const [search, setSearch] = useState(query);
  const [checked, setChecked] = useState(startsFrom);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const searchQuery = form.search.value;
    const isNewTerm = form.new.checked;

    const searchObj = {};
    if (searchQuery.length) searchObj.term = searchQuery;
    if (isNewTerm) searchObj.new = isNewTerm;

    setSearchParams(searchObj);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        className={styles.search__textInput}
        type="search"
        id="search-field"
        placeholder="English Term Search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.search__btn}>Search</button>
      <label>
        <input
          className={styles.search__chboxInput}
          type="checkbox"
          name="new"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Newly added terms{" "}
      </label>
    </form>
  );
}
