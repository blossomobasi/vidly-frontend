import { useParams } from "react-router-dom";

function GenreIdPage() {
  const { genreId } = useParams();

  return <div>GenreIdPage: {genreId}</div>;
}

export default GenreIdPage;
