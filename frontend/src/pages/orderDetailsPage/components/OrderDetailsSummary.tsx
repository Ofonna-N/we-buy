import { Box, Typography, Button } from "@mui/material";
import { OrderResponse } from "../../../types/Order";
import OrderSummaryCard from "../../../component/common/OrderSummaryCard";
import {
  PayPalButtons,
  SCRIPT_LOADING_STATE,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import AppSpinner from "../../../component/loading/AppSpinner";
import useQueryPaypalClientId from "../../../hooks/api-hooks/paypal/useQueryPaypalClientId";
import { useEffect, useRef } from "react";
import useMutatePayOrder from "../../../hooks/api-hooks/orders/useMutatePayOrder";
import { useAppDispatch } from "../../../hooks/redux-hooks/appStoreHooks";
import { appSnackBarActions } from "../../../slices/appSnackBarSlice";

type Props = {
  order: OrderResponse;
  isLoading: boolean;
  paypalScript: ReturnType<typeof usePayPalScriptReducer>;
  refetchOrder: () => void;
};

const OrderDetailsSummary = (props: Props) => {
  const [{ isPending }, paypalDispach] = props.paypalScript;

  const {
    data: clientId,
    isLoading: clientIdLoading,
    error: clientIdError,
  } = useQueryPaypalClientId({ key: import.meta.env.VITE_APPKEY });

  const {
    mutate: payOrder,
    isLoading: payOrderIsLoading,
    isSuccess: payOrderIsSucess,
    isError: payOrderIsError,
  } = useMutatePayOrder(props.order._id);

  const dispatchRef = useRef(useAppDispatch());

  const payPalDispatchRef = useRef(paypalDispach);
  const refetchOrderRef = useRef(props.refetchOrder);
  const canLoadPaypalScript = useRef(
    !isPending && !props.isLoading && clientId?.id
  );
  // console.log(props.paypalScript);

  useEffect(() => {
    if (canLoadPaypalScript.current) {
      const loadPaypalScript = async () => {
        payPalDispatchRef.current({
          type: "resetOptions",
          value: {
            clientId: clientId?.id || "",
            currency: "USD",
          },
        });
        payPalDispatchRef.current({
          type: "setLoadingStatus",
          value: SCRIPT_LOADING_STATE.PENDING,
        });
      };

      if (!props.order.isPaid) {
        loadPaypalScript();
      }
    }
  }, [clientId?.id, props.order.isPaid]);

  useEffect(() => {
    if (payOrderIsSucess) {
      console.log("order payment successfull Refetching order object...");
      refetchOrderRef.current();
    }

    if (payOrderIsError) {
      console.log("order payment error...");
      dispatchRef.current(
        appSnackBarActions.showAppSnackBar({
          open: true,
          message: "Couldn't process payment",
          useIcon: {
            icon: "error",
          },
        })
      );
    }
  }, [payOrderIsSucess, payOrderIsError]);

  const onCreateOrder = () => {
    // implement method
  };

  const onApproveOrder = () => {
    // implement method
  };

  const onError = () => {
    // implement method
  };

  const onApproveTest = () => {
    // implement method
    payOrder({ id: props.order._id, details: { payer: {} } });
  };

  if (clientIdLoading) return <AppSpinner />;
  if (clientIdError) throw new Error(clientIdError.message);
  return (
    <OrderSummaryCard
      title="Order Summary"
      infoItems={[
        <>
          <Typography>Items</Typography>
          <Typography>${props.order?.itemPrice}</Typography>
        </>,
        <>
          <Typography>Shipping</Typography>
          <Typography>${props.order?.shippingPrice}</Typography>
        </>,
        <>
          {" "}
          <Typography>Tax</Typography>
          <Typography>${props.order?.taxPrice}</Typography>
        </>,
        <>
          <Typography>Total</Typography>
          <Typography>${props.order?.totalPrice}</Typography>
        </>,
        <>
          {isPending || props.isLoading || payOrderIsLoading ? (
            <AppSpinner />
          ) : (
            !props.order.isPaid && (
              <Box width={"100%"} py={1}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mb: "0.65rem", width: "100%", fontWeight: "bold" }}
                  onClick={onApproveTest}
                >
                  Demo Pay
                </Button>
                <PayPalButtons style={{ layout: "vertical" }} />
              </Box>
            )
          )}
        </>,
      ]}
    />
  );
};

export default OrderDetailsSummary;
