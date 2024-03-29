import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function MovieDetail() {
  const { movies } = useSelector((state) => state.movies);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const movieDetail = movies.find((item) => item.id == id);
    setMovie(movieDetail);
    setLoading(false);
  }, [id, movies]);

  return (
    <div>
      {loading ? (
        <h4 className="mx-1">Loading...</h4>
      ) : movie ? (
        <div className="flex">
          <Box
            component="img"
            sx={{
              height: "600px", // กำหนดความสูงเป็น 300px
              width: "700px", // กำหนดความกว้างเป็น 400px
              objectFit: "cover", // ให้รูปขยายหรือย่อให้พอดีสัดส่วนในพื้นที่ที่กำหนด
            }}
            src={movie.poster_url}
            alt={movie.title_en}
          />

          <div className="m-2">
            <h3>{movie.title_en}</h3>
            <p className="mx-2">{movie.synopsis_th}</p>
            <div>
              <strong>Released : {movie.release_date}</strong>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ margin: "1rem 0" }}>Movie not found</h4>
      )}
    </div>
  );
}
