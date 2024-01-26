import { getMovies } from "../API/GetMovies";

export async function loader() {
    const movies = await getMovies();
    return { movies };
  }

const Movies = () =>
{
    return (
    <></>
    )
}

export default Movies;