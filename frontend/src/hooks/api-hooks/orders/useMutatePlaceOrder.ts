import endpointRoutes from "../../../constants/EndpointRoutes";
import useMutateData from "../useMutateData";

const useMutatePlaceOrder = () => {
  const onOrderPlaced = (data: string) => {
    console.log("order placed: ", data);
  };

  return useMutateData(endpointRoutes.ORDERS.ORDERS, onOrderPlaced);
};

export default useMutatePlaceOrder;
