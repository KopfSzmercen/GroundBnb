import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      boxShadow={3}
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        padding: "1em 2.5em",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row"
        },
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "200px"
        }}
      >
        <IconButton>
          <Facebook fontSize="medium" color="secondary" />
        </IconButton>

        <IconButton>
          <Twitter fontSize="medium" color="secondary" />
        </IconButton>

        <IconButton>
          <Instagram fontSize="medium" color="secondary" />
        </IconButton>
      </Box>

      <Box
        sx={{
          mt: {
            xs: "25px",
            md: "0"
          }
        }}
      >
        <Typography>Copyright 2022</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
