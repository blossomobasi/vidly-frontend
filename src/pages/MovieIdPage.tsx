import { useParams } from "react-router-dom";

function MovieIdPage() {
  const { movieId } = useParams();

  return <div>MovieIdPage: {movieId}</div>;
}

export default MovieIdPage;
