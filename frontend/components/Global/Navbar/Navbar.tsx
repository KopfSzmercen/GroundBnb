import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useQuery } from "react-query";
import axiosInstance from "../../../axios.config";
import { LoginSuccess } from "../../../types/login/login";
import ColorModeToggler from "./ColorModeToggler";
import NavPopover from "./NavPopover";

const Navbar = () => {
  const { data } = useQuery<LoginSuccess>("getCurrentUser", () => {
    return axiosInstance.get("/auth/getMe");
  });

  const isCurrentUser = data?.data?.id ? true : false;
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

        <NavPopover currentUser={isCurrentUser} />
      </Box>
    </Box>
  );
};

export default Navbar;
