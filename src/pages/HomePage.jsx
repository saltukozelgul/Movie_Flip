import { React, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
// import process

export default function HomePage() {
  const [top5, setTop5] = useState([]);
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
  }, []);

  return (
    <Grid>
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
              <p>{item.overview}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Grid>
  );
}
