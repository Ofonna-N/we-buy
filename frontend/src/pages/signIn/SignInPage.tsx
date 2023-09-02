import { Box, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";

import SignInForm from "./components/SignInForm";
import { useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RoutesPaths from "../../constants/RoutePaths";

const SignInPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location]);

  const redirectParam = params.get("redirect");

  useEffect(() => {
    if (redirectParam) navigate(RoutesPaths.HOME_ROUTE);
  }, [redirectParam]);
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
