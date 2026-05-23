import { useEffect, useState } from "react";
import tmdbApi from "./api/tmdb";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const response = await tmdbApi.get("/movie/popular", {
          params: {
            page: 1,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error("TMDB API 요청 실패:", error);
      }
    }

    getPopularMovies();
  }, []);

  return (
    <main>
      <h1>인기 영화 목록</h1>

      {movies.map((movie) => (
        <section key={movie.id}>
          <img
            src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            width="150"
          />

          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </section>
      ))}
    </main>
  );
}

export default App;