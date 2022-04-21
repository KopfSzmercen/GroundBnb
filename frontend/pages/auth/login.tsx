import { Box } from "@mui/material";
import { NextPage } from "next";
import LoginForm from "../../components/Forms/LoginForm";

const login: NextPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        mt: "60px"
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default login;
