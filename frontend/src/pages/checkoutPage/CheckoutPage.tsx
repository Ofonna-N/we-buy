import { Outlet } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";

const CheckoutPage = () => {
  return (
    <AppContainer>
      <Box mb={"2rem"}>
        <Typography variant="body1">
          Shipping / Payment Method / Place order
        </Typography>
      </Box>
      <Outlet />
    </AppContainer>
  );
};

export default CheckoutPage;
