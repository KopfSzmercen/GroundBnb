import { Box } from "@mui/system";
import { NextPage } from "next";
import RegisterForm from "../../components/Forms/RegisterForm";

const Register: NextPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        mt: "60px"
      }}
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
