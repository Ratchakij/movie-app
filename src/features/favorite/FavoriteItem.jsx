import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeWishlist } from "../../store/wishSlice";

export default function FavoriteItem({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const removeWishlistHandler = (wishlist) => {
    dispatch(removeWishlist(wishlist));
  };

  return (
    <div className="border  border-gray-300 rounded-lg p-4 ">
      <Link to={`movie/${movie.id}`}>
        <div className="h-3/4 overflow-hidden rounded-lg cursor-pointer">
          <img
            src={movie.poster_url}
            alt={movie.title_en}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 text-white">
          <h2 className="text-lg  font-bold whitespace-nowrap">
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
          startIcon={<DeleteIcon />}
          onClick={() => removeWishlistHandler(movie)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
