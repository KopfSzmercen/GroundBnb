import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const MainHeader = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: "90%",
        maxWidth: "600px",
        padding: "20px 35px",
        borderRadius: "5px",
        color: "text.secondary"
      }}
    >
      <Typography variant="h2">Find a perfect place</Typography>
    </Box>
  );
};

export default MainHeader;
