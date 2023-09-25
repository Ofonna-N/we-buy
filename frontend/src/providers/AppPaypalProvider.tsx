import { PayPalScriptProvider } from "@paypal/react-paypal-js";

type Props = {
  children: React.ReactNode;
};

const AppPaypalProvider = (props: Props) => {
  return (
    <PayPalScriptProvider
      deferLoading={true}
      options={{
        clientId: "test",
        currency: "USD",
        intent: "capture",
      }}
    >
      {props.children}
    </PayPalScriptProvider>
  );
};

export default AppPaypalProvider;
