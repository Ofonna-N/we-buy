import { Box, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";

import SignInForm from "./components/SignInForm";

const SignInPage = () => {
  return (
    <AppContainer>
      <Box marginBottom={"1.5rem"}>
        <Typography variant="h4">Sign In</Typography>
      </Box>
      <Box>
        <SignInForm />
      </Box>
    </AppContainer>
  );
};

export default SignInPage;
