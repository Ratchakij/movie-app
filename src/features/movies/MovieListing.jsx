import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function MovieListing({ search }) {
  const { movies } = useSelector((state) => state.movies);
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title_en.toLowerCase().includes(search.toLowerCase()) ||
      movie.title_th.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredMovies &&
        filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
