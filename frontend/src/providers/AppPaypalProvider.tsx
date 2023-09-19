import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import useQueryPaypalClientId from "../hooks/api-hooks/paypal/useQueryPaypalClientId";

type Props = {
  children: React.ReactNode;
};

const AppPaypalProvider = (props: Props) => {
  const { data } = useQueryPaypalClientId({ key: import.meta.env.VITE_APPKEY });

  return (
    <PayPalScriptProvider
      options={{ clientId: data?.id || "", currency: "USD", intent: "capture" }}
    >
      {props.children}
    </PayPalScriptProvider>
  );
};

export default AppPaypalProvider;
