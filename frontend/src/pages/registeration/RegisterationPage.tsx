import { Box, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import RegisterForm from "./components/RegisterForm";

const RegisterationPage = () => {
  return (
    <AppContainer>
      <Typography variant="h4" mb={"2rem"}>
        Create Account
      </Typography>
      <Box>
        <RegisterForm />
      </Box>
    </AppContainer>
  );
};

export default RegisterationPage;
