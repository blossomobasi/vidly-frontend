import { useEffect, useState } from "react";
import { useAddMovie } from "../hooks/movies/useAddMovie";
import styles from "./AddMovie.module.css";
import FormRow from "../ui/FormRow";
import Genres from "../components/Genres";

function AddMovie() {
    const [isOpen, setIsOpen] = useState(false);
    const { addMovie, isAddingMovie } = useAddMovie();
    const [title, setTitle] = useState("");
    const [genreName, setGenreName] = useState("");
    const [description, setDescription] = useState("");
    const [numberInStock, setNumberInStock] = useState(0);
    const [dailyRentalRate, setDailyRentalRate] = useState(0);

    useEffect(() => {
        const storedGenre = localStorage.getItem("selectedGenre");
        if (storedGenre) {
            setGenreName(storedGenre);
        }

        const handleStorageChange = () => {
            const newGenre = localStorage.getItem("selectedGenre");
            if (newGenre) setGenreName(newGenre);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => window.removeEventListener("storage", handleStorageChange);
    }, [genreName]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!genreName) return console.log("genreName is required");

        addMovie({
            title,
            genreName,
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

                    <FormRow label="Genre Name:">
                        <>
                            <input
                                disabled
                                type="text"
                                id="genreName"
                                className={styles.input}
                                value={genreName}
                                onChange={(e) => setGenreName(e.target.value)}
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
                            !genreName ||
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
