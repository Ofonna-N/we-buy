import { Box, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";

import SignInForm from "./components/SignInForm";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoutesPaths from "../../constants/RoutePaths";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";

const SignInPage = () => {
  const user = useAppSelector((state) => state.userSlice.userInfo);
  const navigate = useNavigate();

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const redirectParam = params.get("redirect");

  useEffect(() => {
    const navigateRoute = redirectParam
      ? redirectParam
      : user
      ? RoutesPaths.HOME_ROUTE
      : "";
    if (navigateRoute) navigate(navigateRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, redirectParam]);

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
