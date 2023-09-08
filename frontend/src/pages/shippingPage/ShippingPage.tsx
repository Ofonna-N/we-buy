import AppContainer from "../../component/page/AppContainer";
import { Box, Typography } from "@mui/material";
import ShippingForm from "./components/ShippingForm";

const ShippingPage = () => {
  return (
    <AppContainer>
      <Typography variant="h4" mb={"2rem"}>
        Shipping
      </Typography>
      <Box>
        <ShippingForm />
      </Box>
    </AppContainer>
  );
};

export default ShippingPage;
