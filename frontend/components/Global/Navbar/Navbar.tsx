import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ColorModeToggler from "./ColorModeToggler";
import NavPopover from "./NavPopover";

const Navbar = () => {
  return (
    <Box
      data-testid="navbar"
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 2rem"
      }}
    >
      <Typography variant="h6" data-testid="home-link">
        <Link aria-label="home-link" href="/">
          GroundBNB
        </Link>
      </Typography>

      <Box>
        <ColorModeToggler />
        <NavPopover />
      </Box>
    </Box>
  );
};

export default Navbar;
