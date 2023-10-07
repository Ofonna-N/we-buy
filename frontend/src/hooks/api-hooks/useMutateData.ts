import { useMemo } from "react";
import { useMutation } from "react-query";
import APIClient from "../../services/api-client";
import { AxiosError } from "axios";
import ErrorResponse from "../../types/ErrorResponse";

export type APIMutateMethods = "post" | "patch" | "delete" | "put";

const useMutateData = <T, B>(
  endpoint: string,
  onSuccessFn?: (data: T, variables: B) => void,
  onErrorFn?: (error: Error, variables: B) => void,
  method?: APIMutateMethods
) => {
  const apiClient = useMemo(() => new APIClient<T>(endpoint), [endpoint]);

  return useMutation<T, Error, B>({
    mutationFn: async (body) => {
      let UserResponse = null;
      try {
        switch (method) {
          case "patch":
            UserResponse = await apiClient.patch(body);
            break;
          case "put":
            UserResponse = await apiClient.put(body);
            break;
          case "delete":
            UserResponse = await apiClient.delete();
            break;
          default:
            UserResponse = await apiClient.post(body);
            break;
        }
        const user = UserResponse.data;
        return user;
      } catch (err) {
        throw new Error(
          (err as AxiosError<ErrorResponse>).response?.data.error
        );
      }
    },

    onSuccess: onSuccessFn,
    onError: onErrorFn,
  });
};

export default useMutateData;
