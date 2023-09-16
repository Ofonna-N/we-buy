import { Box, Typography } from "@mui/material";
import ShippingForm from "./components/ShippingForm";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks/appStoreHooks";
import { checkoutStepsActions } from "../../slices/checkoutStepsSlice";
import { shippingInfoActions } from "../../slices/shippingInfoSlice";
import ShippingFormInput from "../../types/ShippingFormInput";
import { useNavigate } from "react-router-dom";
import RoutesPaths from "../../constants/RoutePaths";

const ShippingPage = () => {
  const dispatch = useRef(useAppDispatch());
  const navigate = useNavigate();

  const onStepsComplete = (data: ShippingFormInput) => {
    dispatch.current(shippingInfoActions.setShippingInfo(data));
    dispatch.current(
      checkoutStepsActions.updateCheckoutStep({ completedStep: "Shipping" })
    );
    navigate(RoutesPaths.PAYMENTMETHOD_ROUTE);
  };

  useEffect(() => {
    dispatch.current(
      checkoutStepsActions.updatecheckoutBreadCrumb({ currentStep: "Shipping" })
    );
  }, []);

  return (
    <Box>
      <Typography variant="h4" mb={"2rem"}>
        Shipping
      </Typography>
      <Box>
        <ShippingForm onFormSubmit={onStepsComplete} />
      </Box>
    </Box>
  );
};

export default ShippingPage;
