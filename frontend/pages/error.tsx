import { Container, Typography } from "@mui/material";
import React from "react";

const error = () => {
  return (
    <Container sx={{ mt: "50px" }}>
      <Typography variant="h3">
        Ooops, something went wrong. Please try later.
      </Typography>
    </Container>
  );
};

export default error;
