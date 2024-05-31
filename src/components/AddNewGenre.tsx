import { useState } from "react";
import { useCreateGenre } from "../hooks/genres/useCreateGenre";

function AddNewGenre() {
  const [newGenre, setNewGenre] = useState("");
  const { mutate, isPending } = useCreateGenre();

  function handleAddGenre(e: React.FormEvent, newGenre: string) {
    e.preventDefault();
    mutate(newGenre);
    setNewGenre("");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Add new genre"
        value={newGenre}
        onChange={(e) => setNewGenre(e.target.value)}
      />
      <button
        disabled={isPending || !newGenre}
        type="submit"
        onClick={(e) => handleAddGenre(e, newGenre)}
      >
        Add new Genre
      </button>
    </form>
  );
}

export default AddNewGenre;
