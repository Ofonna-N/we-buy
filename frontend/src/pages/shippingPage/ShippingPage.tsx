import { Box, Typography } from "@mui/material";
import ShippingForm from "./components/ShippingForm";

const ShippingPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={"2rem"}>
        Shipping
      </Typography>
      <Box>
        <ShippingForm />
      </Box>
    </Box>
  );
};

export default ShippingPage;
