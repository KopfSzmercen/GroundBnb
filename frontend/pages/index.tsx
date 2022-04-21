import { Box } from "@mui/material";
import type { NextPage } from "next";
import MainPage from "../components/MainPage/MainPage";

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <MainPage />
      </Box>
    </>
  );
};

export default Home;
