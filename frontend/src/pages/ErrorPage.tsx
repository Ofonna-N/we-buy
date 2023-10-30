import { Box, Paper, Typography, Divider } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import AppContainer from "../component/page/AppContainer";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Box>
      <AppContainer>
        <Paper variant="elevation" elevation={3} sx={{ padding: "1rem" }}>
          <Typography variant="h3">
            {isRouteErrorResponse(error)
              ? "Page Unavailable"
              : "Unexpected Error"}
          </Typography>
          <Divider />
          <Typography variant="body1" paddingTop={"1rem"}>
            {isRouteErrorResponse(error)
              ? error?.error?.message || "Something went wrong"
              : "Something went wrong"}
          </Typography>
        </Paper>
      </AppContainer>
    </Box>
  );
};

export default ErrorPage;
