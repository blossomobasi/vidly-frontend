import { useState } from "react";
import { useUpdateGenre } from "../hooks/genres/useUpdateGenre";
import { useGenres } from "../hooks/genres/useGenres";

function UpdateGenre() {
    const [newGenre, setNewGenre] = useState("");
    const { mutate: update, isPending } = useUpdateGenre();
    const { data: genres } = useGenres();

    function handleUpdateGenre(e: React.FormEvent, newGenre: string) {
        e.preventDefault();
        const genreId = genres?.find((genre) => genre.name === newGenre)?._id;
        update({ id: genreId, name: newGenre });
        setNewGenre("");
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Update existing genre"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
            />
            <button
                disabled={isPending || !newGenre}
                type="submit"
                onClick={(e) => handleUpdateGenre(e, newGenre)}
            >
                Update a Genre
            </button>
        </form>
    );
}

export default UpdateGenre;
