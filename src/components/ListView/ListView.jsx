import { React, useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ListViewItem } from "./ListViewItem";

export const ListView = (props) => {
  const [movies, setMovies] = useState([]);
  const { category } = props;

  useEffect(() => {
    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ];
    const genre = genres.find(
      (genre) => genre.name.toUpperCase() === category.toUpperCase()
    );

    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&with_genres=${genre.id}
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
