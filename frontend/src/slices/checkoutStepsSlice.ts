import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RoutesPaths from "../constants/RoutePaths";

type CheckoutStep = "Shipping" | "Payment Method" | "Place Order";

const initialState = {
  checkoutSteps: {
    shipping: {
      path: RoutesPaths.CHECKOUT_ROUTE,
      complete: false,
      label: "Shipping" as CheckoutStep,
    },
    paymentMethod: {
      path: RoutesPaths.PAYMENTMETHOD_ROUTE,
      complete: false,
      label: "Payment Method" as CheckoutStep,
    },
    placeOrder: {
      path: RoutesPaths.PLACE_ORDER_ROUTE,
      complete: false,
      label: "Place Order" as CheckoutStep,
    },
  },
  breadCrumbs: [] as CheckoutStep[],
};

const checkoutStepsSlice = createSlice({
  name: "checkout-steps-breadcrumbs",
  initialState,
  reducers: {
    updateCheckoutStep(
      state,
      action: PayloadAction<{ completedStep: CheckoutStep }>
    ) {
      switch (action.payload.completedStep) {
        case "Shipping":
          state.checkoutSteps.shipping.complete = true;
          break;
        case "Payment Method":
          state.checkoutSteps.paymentMethod.complete = true;
          break;
        case "Place Order":
          state.checkoutSteps.placeOrder.complete = true;
          break;
      }
    },
    updatecheckoutBreadCrumb(
      state,
      action: PayloadAction<{ currentStep: CheckoutStep }>
    ) {
      switch (action.payload.currentStep) {
        case "Shipping":
          state.breadCrumbs = ["Shipping"];
          break;
        case "Payment Method":
          state.breadCrumbs = ["Shipping", "Payment Method"];
          break;
        case "Place Order":
          state.breadCrumbs = ["Shipping", "Payment Method", "Place Order"];
          break;
      }
    },
  },
});

export default checkoutStepsSlice.reducer;

export const checkoutStepsActions = checkoutStepsSlice.actions;
