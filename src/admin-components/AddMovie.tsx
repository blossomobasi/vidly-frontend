import { useState } from "react";
import { useAddMovie } from "../hooks/movies/useAddMovie";
import styles from "./AddMovie.module.css";
import FormRow from "../ui/FormRow";
import Genres from "../components/Genres";

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
                    <FormRow label="Title:">
                        <input
                            disabled={isAddingMovie}
                            type="text"
                            id="title"
                            className={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormRow>

                    <FormRow label="Genre ID:">
                        <>
                            <input
                                // disabled
                                type="text"
                                id="genreId"
                                className={styles.input}
                                value={genreIdFromLocalStorage || genreId}
                                onChange={(e) => setGenreId(e.target.value)}
                            />
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <Genres />
                            </div>
                        </>
                    </FormRow>

                    <FormRow label="Description:">
                        <textarea
                            id="description"
                            className={styles.textarea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </FormRow>

                    <FormRow label="Number in Stock">
                        <input
                            disabled={isAddingMovie}
                            type="number"
                            id="numberInStock"
                            className={styles.input}
                            value={numberInStock}
                            onChange={(e) => setNumberInStock(parseInt(e.target.value))}
                        />
                    </FormRow>

                    <FormRow label="Daily Rental Rate:">
                        <input
                            disabled={isAddingMovie}
                            type="number"
                            id="dailyRentalRate"
                            className={styles.input}
                            value={dailyRentalRate}
                            onChange={(e) => setDailyRentalRate(parseFloat(e.target.value))}
                        />
                    </FormRow>

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
