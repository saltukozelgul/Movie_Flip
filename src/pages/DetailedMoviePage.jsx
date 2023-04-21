import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const DetailedMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState("");
  const [watchProviders, setWatchProviders] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&append_to_response=watch/providers,videos
        `
      );
      const data = await response.json();
      // get the videos from the data object
      const trailerUrl = data.videos.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      // set the trailer url
      setTrailer(`https://www.youtube.com/watch?v=${trailerUrl.key}`);

      // get the watch providers from the data object
      const watchProviders = data["watch/providers"].results.US.buy;
      // set the watch providers
      setWatchProviders(watchProviders);

      setMovie(data);
    };
    fetchMovie();
    console.log(movie);
  }, []);

  console.log(movie);
  return movie ? (
    <Box
      style={{
        height: "100vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="darker">
        <div className="detailed-movie-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "25%", height: "auto", borderRadius: 10 }}
          />
          <div className="movie-info">
            <Typography className="movie-title" variant="h4" gutterBottom>
              {movie.title}{" "}
              <span className="alt-text">
                {` - ${
                  movie.release_date ? movie.release_date.split("-")[0] : ""
                }`}
              </span>
              <div style={{ display: "flex", fontSize: 24 }}>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#f4c10f", marginRight: 5 }}
                />

                <span className="movie-rating">
                  {Number(movie.vote_average).toFixed(1)}
                </span>
                <span className="movie-votes">
                  {`(${movie.vote_count} votes)`}
                </span>
                <span>| {movie.runtime} min</span>
              </div>
            </Typography>
            <div className="movie-providers">
              {watchProviders ? (
                <>
                  {watchProviders.map((provider) => (
                    <img
                      className="provider-logo"
                      src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                      alt={provider.provider_name}
                      style={{ width: "30px", height: "auto" }}
                    />
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
            <Typography className="movie-overview" variant="body1" gutterBottom>
              {movie.overview}
            </Typography>
            <Typography className="movie-trailer" variant="body1" gutterBottom>
              <a href={trailer} target="_blank" rel="noreferrer">
                Watch Trailer
              </a>
              <FontAwesomeIcon icon={faPlay} style={{ marginLeft: 5 }} />
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  ) : (
    <div>Loading...</div>
  );
};
