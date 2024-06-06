import { useState } from "react";
import { useCreateGenre } from "../hooks/genres/useCreateGenre";

function AddNewGenre() {
    const [newGenre, setNewGenre] = useState("");
    const { mutate: addGenre, isPending } = useCreateGenre();

    function handleAddGenre(e: React.FormEvent) {
        e.preventDefault();
        addGenre(newGenre);
        setNewGenre("");
    }

    return (
        <form>
            <h3>Add new Genre</h3>
            <input
                type="text"
                placeholder="Add new genre"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
            />
            <button
                disabled={isPending || !newGenre}
                type="submit"
                onClick={(e) => handleAddGenre(e)}
            >
                Add new Genre
            </button>
        </form>
    );
}

export default AddNewGenre;
