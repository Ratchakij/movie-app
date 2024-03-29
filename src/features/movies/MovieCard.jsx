import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishList } from "../../store/wishSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const addToWishListHandler = (movie) => {
    dispatch(addToWishList(movie));
    // const updatedMovie = { ...movie, favorite: !movie.favorite };
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 ">
      <Link to={`movie/${movie.id}`}>
        <div className="h-3/4 overflow-hidden rounded-lg cursor-pointer">
          <img
            src={movie.poster_url}
            alt={movie.title_en}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold whitespace-nowrap">
            {movie.title_en}
          </h2>
          <p className="text-sm">Year: {movie.release_date}</p>
        </div>
      </Link>
      <div className="mt-4 flex justify-between">
        <Link to={`movie/${movie.id}`}>
          <Button variant="contained" size="small">
            Read More
          </Button>
        </Link>
        <Button
          variant="outlined"
          size="small"
          startIcon={
            <FavoriteIcon sx={{ color: movie.favorite ? pink[500] : "" }} />
          }
          onClick={() => addToWishListHandler(movie)}
        >
          Favorite
        </Button>
      </div>
    </div>
  );
}
