import { Grid, Paper } from "@mui/material";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ListViewItem = (props) => {
  const { id, title, poster_path, overview, vote_average, release_date } =
    props;
  return (
    <Grid item md={3} key={id}>
      {/* Create a poster like a stack poster_path on background image and others on it */}
      <Link to={`/movie/${id}`}>
        <Paper
          className="movie_poster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "320px",
            width: "100%",
            position: "relative",
            margin: 10,
            padding: 10,
          }}
        >
          <div className="movie_overlay">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h5 style={{ color: "white", textAlign: "center" }}>{title}</h5>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p style={{ color: "white" }}>
                {vote_average} {"  "}
                <FontAwesomeIcon icon={faStar} />
              </p>
              <p style={{ color: "white" }}>
                {release_date ? release_date.split("-")[0] : ""}
              </p>
            </div>
          </div>
        </Paper>
      </Link>
    </Grid>
  );
};
