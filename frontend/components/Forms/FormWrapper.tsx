import { Paper, Typography } from "@mui/material";
import React from "react";

const FormWrapper: React.FC<{ header: string; children?: React.ReactNode }> = ({
  header,
  children
}) => {
  return (
    <Paper
      sx={{
        padding: "2em",
        display: "grid",
        placeItems: "center",
        width: "95%",
        maxWidth: "600px"
      }}
    >
      <Typography fontWeight="bold" fontSize="2.5em">
        {header}
      </Typography>
      {children}
    </Paper>
  );
};

export default FormWrapper;
