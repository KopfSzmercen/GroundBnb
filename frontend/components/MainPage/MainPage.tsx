import { Box, Button, Stack } from "@mui/material";
import Description from "./Description";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import ImagesSection from "./ImagesSection";
import MainHeader from "./MainHeader";

import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  return (
    <Stack
      spacing={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.dark",
          width: "100%",
          height: "100%",
          paddingY: "30px"
        }}
      >
        <MainHeader />
        <Description />
      </Box>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => router.push("/auth/login")}
      >
        Start now!
      </Button>

      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center"
        }}
      >
        <ImagesSection />
      </Box>

      <FaqSection />

      <Footer />
    </Stack>
  );
};

export default MainPage;
