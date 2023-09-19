import endpointRoutes from "../../../constants/EndpointRoutes";
import useQueryData from "../useQueryData";

const useQueryPaypalClientId = (query: { key: string }) => {
  return useQueryData<{ id: string }>(
    endpointRoutes.PAYPAL.CLIENT_ID + "?key=" + query.key
  );
};

export default useQueryPaypalClientId;
