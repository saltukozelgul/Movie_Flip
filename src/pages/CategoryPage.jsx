import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ListView } from "../components/ListView/ListView";

export const CategoryPage = () => {
  const { category } = useParams();
  return (
    <Box style={{ padding: 25 }}>
      <Typography color={"#0098e5"} variant="h4" component="h1" gutterBottom>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      <ListView category={category} />
    </Box>
  );
};

export default withRouter(CategoryPage);
