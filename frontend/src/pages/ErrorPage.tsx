import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box>
      <Container
        fixed
        sx={{
          //   backgroundColor: "red",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper variant="elevation" elevation={3} sx={{ padding: "1rem" }}>
          <Typography variant="h3">
            {isRouteErrorResponse(error)
              ? "Page Unavailable"
              : "Unexpected Error"}
          </Typography>
          <Divider />
          <Typography variant="body1" paddingTop={"1rem"}>
            {isRouteErrorResponse(error)
              ? error.error?.message
              : "Something went wrong"}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ErrorPage;
