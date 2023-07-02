import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
    const totalPages = Math.ceil(total / limit);

    const selectPage = (newPage) => {
        setPage(newPage + 1);
    };

    return (
        <div className={styles.container}>
            {totalPages > 0 &&
                Array(totalPages)
                    .fill()
                    .map((_, index) => (
                        <button
                            key={index}
                            onClick={() => selectPage(index)}
                            className={
                                page === index + 1
                                    ? `${styles.page_btn} ${styles.active}`
                                    : styles.page_btn
                            }
                        >
                            {index + 1}
                        </button>
                    ))}
        </div>
    );
};

export default Pagination;
