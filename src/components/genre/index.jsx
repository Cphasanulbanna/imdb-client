import React from "react";

import styles from "./styles.module.css";

export const Genre = ({ genres, setGenreIds, genreIds, setPage }) => {
    const chnageGnere = (e) => {
        const genreId = e.target.value;
        if (e.target.checked) {
            const state = [...genreIds, genreId];
            setGenreIds(state);
        } else {
            const state = genreIds.filter((id) => id !== genreId);
            setGenreIds(state);
        }
        setPage(1);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Filter by Genre</h1>
            <div className={styles.genre_container}>
                {genres.map((genre) => (
                    <div
                        key={genre._id}
                        className={styles.genre}
                    >
                        <input
                            type="checkbox"
                            className={styles.genre_input}
                            value={genre._id}
                            onChange={chnageGnere}
                        />
                        <p className={styles.genre_label}>{genre.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
