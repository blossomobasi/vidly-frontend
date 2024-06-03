import { useParams } from "react-router-dom";

function GenreIdPage() {
  const { genreId } = useParams();
  console.log(genreId);
  return <div>GenreIdPage: {genreId}</div>;
}

export default GenreIdPage;
