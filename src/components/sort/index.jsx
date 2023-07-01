import React from "react";

import styles from "./styles.modules.css";

const Sort = ({ sort, setSort }) => {
    const onSelectChange = (e) => {
        setSort({ sort: e.target.value, order: sort?.order });
    };

    const onArrowChange = () => {
        if (sort?.order === "asc") {
            setSort({ sort: sort.sort, order: "desc" });
        } else {
            setSort({ sort: sort.sort, order: "asc" });
        }
    };
    return (
        <div
            id="container"
            className={styles.container}
        >
            <p className={styles.sort_by}>Sort By:</p>
            <select
                id="select"
                className={styles.select}
                defaultValue={sort?.sort}
                onChange={onSelectChange}
            >
                <option value="year">Year</option>
                <option value="rating">Rating</option>
            </select>
            <button
                id="btn-box"
                className={styles.arrow_btn}
                onClick={onArrowChange}
            >
                <p className={styles.up_arrow}>&uarr;</p>
                <p className={styles.down_arrow}>&darr;</p>
            </button>
        </div>
    );
};

export default Sort;
