import { useState } from "react";
import { useDeleteGenre } from "../hooks/genres/useDeleteGenre";

function DeleteGenre() {
    const [title, setTitle] = useState("");
    const { deleteGenre, isDeleting } = useDeleteGenre();

    function handleDeleteGenre(e: React.FormEvent) {
        e.preventDefault();
        deleteGenre(title);
        setTitle("");
    }

    return (
        <form>
            <h3>Delete a genre</h3>
            <input
                disabled={isDeleting}
                type="text"
                placeholder="Delete a genre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                disabled={isDeleting || !title}
                type="submit"
                onClick={(e) => handleDeleteGenre(e)}
            >
                Delete
            </button>
        </form>
    );
}

export default DeleteGenre;
