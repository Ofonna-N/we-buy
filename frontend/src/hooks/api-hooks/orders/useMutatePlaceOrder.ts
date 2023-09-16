import useMutateData from "../useMutateData";

const useMutatePlaceOrder = () => {
  const onOrderPlaced = (data: string) => {
    console.log("order placed: ", data);
  };

  // TODO: Refactor all endpoints into a constant
  return useMutateData("/orders", onOrderPlaced);
};

export default useMutatePlaceOrder;
