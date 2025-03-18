import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div>
          {/* Show movies only if favorites exist */}
          {favorites.length > 0 && (
            <div className="movies-grid">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          )}

          {/* Show empty message if no favorites exist */}
          {favorites.length === 0 && (
            <div className="favorites-empty">
              <h2>No Favorite Movies Yet</h2>
              <p>
                Start adding movies to your favorites and they will appear here!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Favorites;
