import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FavoriteItem from "../features/favorite/FavoriteItem";

export default function FavoritePage() {
  const { wishLists } = useSelector((state) => state.wishlists);

  console.log(wishLists);

  return (
    <div className="h-auto dark:bg-gray-700">
      <div className="container mx-auto px-2 py-3">
        <Typography
          variant="h1"
          className="text-4xl text-center py-5 dark:text-gray-200"
        >
          My Wishlists
        </Typography>
        <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishLists &&
            wishLists.map((wishlist) => (
              <FavoriteItem key={wishlist.id} movie={wishlist} />
            ))}
        </div>
      </div>
    </div>
  );
}
