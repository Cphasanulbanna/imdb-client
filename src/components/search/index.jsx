import React from "react";

import styles from "./styles.module.css";

const Search = ({ setSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search"
            className={styles.search}
            onChange={({ currentTarget: input }) => setSearch(input.value)}
        />
    );
};

export default Search;
