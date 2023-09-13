import { Box, Typography } from "@mui/material";
import ShippingForm from "./components/ShippingForm";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks/appStoreHooks";
import { checkoutStepsActions } from "../../slices/checkoutStepsSlice";
import { shippingInfoActions } from "../../slices/shippingInfoSlice";
import ShippingFormInput from "../../types/ShippingFormInput";
import { useNavigate } from "react-router-dom";
import RoutesPaths from "../../constants/RoutePaths";

const ShippingPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onStepsComplete = (data: ShippingFormInput) => {
    dispatch(shippingInfoActions.setShippingInfo(data));
    dispatch(
      checkoutStepsActions.updateCheckoutStep({ completedStep: "Shipping" })
    );
    navigate(RoutesPaths.PAYMENTMETHOD_ROUTE);
  };

  useEffect(() => {
    dispatch(
      checkoutStepsActions.updatecheckoutBreadCrumb({ currentStep: "Shipping" })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
