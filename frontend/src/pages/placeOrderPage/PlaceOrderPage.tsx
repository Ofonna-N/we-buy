import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks/appStoreHooks";
import { checkoutStepsActions } from "../../slices/checkoutStepsSlice";

const PlaceOrderPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      checkoutStepsActions.updatecheckoutBreadCrumb({
        currentStep: "Place Order",
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Place Order Page</div>;
};

export default PlaceOrderPage;
