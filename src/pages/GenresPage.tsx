import AddNewGenre from "../components/AddNewGenre";
import UpdateGenre from "../components/UpdateGenre";
import Genres from "../components/Genres";

function GenresPage() {
  return (
    <div>
      <Genres />
      <AddNewGenre />
      <UpdateGenre />
    </div>
  );
}

export default GenresPage;
