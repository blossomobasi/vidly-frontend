import AddNewGenre from "../components/AddNewGenre";
// import UpdateGenre from "../components/UpdateGenre";
import Genres from "../components/Genres";
import Movies from "../components/Movies";

function GenresPage() {
  return (
    <div>
      <div>
        <Genres />
        <AddNewGenre />
        {/* <UpdateGenre /> */}
      </div>

      <Movies />
    </div>
  );
}

export default GenresPage;
