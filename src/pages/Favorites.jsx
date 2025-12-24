import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites() {
  const {favorites} = useMovieContext()

  if(favorites){
    return <div className="favorites">
      <h2>Favorites</h2>
    <div className="movies-grid">
                {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            </div>
  }
  return <div className="favorite-movies">
    <h2>No favorite movies yet</h2>
    <p>start adding movies to your favorite........</p>
  </div>;
}
export default Favorites;