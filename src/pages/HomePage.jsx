import { React, useEffect, useState } from "react";
import { Grid, Rating } from "@mui/material";
import { Carousel } from "react-bootstrap";
// import process

export default function HomePage() {
  const [top5, setTop5] = useState([]);

  function getGenreName(id_list) {
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
    const genreString = id_list.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre.name;
    });

    return genreString.join(", ");
  }

  const API_KEY = "fba65574c0cc3bbdae79f80e0a42c768";

  // get trends
  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 100);
    const DISCOVER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=${randomPage}}`;
    async function fetchData() {
      const response = await fetch(DISCOVER_URL);
      const result = await response.json();
      // shuffle the array and get the top 5
      const shuffled = result.results.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);
      setTop5(selected);
    }
    fetchData();
    console.log(top5);
  }, []);

  return (
    <>
      <Carousel>
        {top5.map((item) => (
          <Carousel.Item item xs={12}>
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.original_title}</h3>
              <h6>{getGenreName(item.genre_ids)}</h6>
              <Rating
                name="read-only"
                value={item.vote_average / 2}
                readOnly
              ></Rating>
              <p>{item.overview}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
