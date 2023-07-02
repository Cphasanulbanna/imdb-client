import React from "react";

import styles from "./styles.module.css";

const Search = ({ setSearch, setPage }) => {
    return (
        <input
            onClick={() => setPage(1)}
            type="text"
            placeholder="Search"
            className={styles.search}
            onChange={({ currentTarget: input }) => setSearch(input.value.toString())}
        />
    );
};

export default Search;
