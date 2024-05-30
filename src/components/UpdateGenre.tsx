import { useState } from "react";
import { useUpdateGenre } from "../hooks/useUpdateGenre";
import { useGenres } from "../hooks/useGenres";

function UpdateGenre() {
  const [newGenre, setNewGenre] = useState("");
  const { mutate: update, isPending } = useUpdateGenre();
  const { genres } = useGenres();

  function handleAddGenre(
    e: React.FormEvent,
    // genreId: string,
    newGenre: string
  ) {
    e.preventDefault();
    const genreId = genres?.find((genre) => genre.name === newGenre)?.id;
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
        onClick={(e) => handleAddGenre(e, newGenre)}
      >
        Update a Genre
      </button>
    </form>
  );
}

export default UpdateGenre;
