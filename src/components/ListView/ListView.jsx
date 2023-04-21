import { React, useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ListViewItem } from "./ListViewItem";

export const ListView = (props) => {
  const [movies, setMovies] = useState([]);
  const { category } = props;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=fba65574c0cc3bbdae79f80e0a42c768&with_genres=28
        `
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
    console.log(movies);
  }, [category]);

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <ListViewItem {...movie} />
      ))}
    </Grid>
  );
};
