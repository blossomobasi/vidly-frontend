import { useState } from "react";
import { useAddMovie } from "../hooks/movies/useAddMovie";
import styles from "./AddMovie.module.css";

function AddMovie() {
    const [isOpen, setIsOpen] = useState(false);
    const { addMovie, isAddingMovie } = useAddMovie();
    const [title, setTitle] = useState("");
    const [genreId, setGenreId] = useState("");
    const [description, setDescription] = useState("");
    const [numberInStock, setNumberInStock] = useState(0);
    const [dailyRentalRate, setDailyRentalRate] = useState(0);

    const genreIdFromLocalStorage = localStorage.getItem("selectedGenre");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addMovie({
            title,
            genreId,
            description,
            numberInStock,
            dailyRentalRate,
        });
    };

    return (
        <div>
            <h3>Add Movie</h3>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>

            {isOpen && (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title" className={styles.label}>
                            Title
                        </label>
                        <input
                            disabled={isAddingMovie}
                            type="text"
                            id="title"
                            className={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="genreId" className={styles.label}>
                            Genre ID
                        </label>
                        <input
                            disabled
                            type="text"
                            id="genreId"
                            className={styles.input}
                            value={genreIdFromLocalStorage || genreId}
                            onChange={(e) => setGenreId(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description" className={styles.label}>
                            Description
                        </label>
                        <textarea
                            id="description"
                            className={styles.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="numberInStock" className={styles.label}>
                            Number In Stock
                        </label>
                        <input
                            disabled={isAddingMovie}
                            type="number"
                            id="numberInStock"
                            className={styles.input}
                            value={numberInStock}
                            onChange={(e) => setNumberInStock(parseInt(e.target.value))}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="dailyRentalRate" className={styles.label}>
                            Daily Rental Rate
                        </label>
                        <input
                            disabled={isAddingMovie}
                            type="number"
                            id="dailyRentalRate"
                            className={styles.input}
                            value={dailyRentalRate}
                            onChange={(e) => setDailyRentalRate(parseFloat(e.target.value))}
                        />
                    </div>
                    <button
                        disabled={
                            isAddingMovie ||
                            !title ||
                            !genreId ||
                            !description ||
                            !numberInStock ||
                            !dailyRentalRate
                        }
                        type="submit"
                        className={styles.button}
                    >
                        Add Movie
                    </button>
                </form>
            )}
        </div>
    );
}

export default AddMovie;
