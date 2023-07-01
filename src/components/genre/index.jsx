import React from "react";

import styles from "./styles.module.css";

export const Gnere = ({ genres, filterGenre, setFilterGenre }) => {
    const chnageGnere = (e) => {
        if (e.target.checked) {
            const state = [...filterGenre, e.target.value];
            setFilterGenre(state);
        } else {
            const state = filterGenre.filter((value) => value !== e.target.value);
            setFilterGenre(state);
        }
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Filter by Genre</h1>
            <div className={styles.genre_container}>
                {genres?.map((genre) => (
                    <div
                        key={genre}
                        className={styles.genre}
                    >
                        <input
                            type="checkbox"
                            className={styles.genre_input}
                            value={genre}
                            onChange={chnageGnere}
                        />
                        <p className={styles.genre_label}>{genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
