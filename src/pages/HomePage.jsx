import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store/movieSlice";
import MovieListing from "../features/movies/MovieListing";

export default function HomePage() {
  const { wishLists } = useSelector((state) => state.wishlists);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const fav = wishLists.map((item) => item.id);
      const res = await axios.get(
        "https://www.majorcineplex.com/apis/get_movie_avaiable"
      );
      //   const res = await MovieApi.get();
      const movies = res.data.movies.map((item) => {
        if (fav.includes(item.id)) {
          item.favorite = true;
        } else {
          item.favorite = false;
        }
        return item;
      });

      dispatch(addMovie(movies));
    };

    fetchMovie();
  }, [search]);

  return (
    <div>
      <h3 className="mx-1 my-2">Movies</h3>
      <Paper
        component="form"
        sx={{
          m: "10px 0px",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 410,
        }}
      >
        <InputBase
          value={search}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={() => setSearch("")}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
      <MovieListing search={search} />
    </div>
  );
}
