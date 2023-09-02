import { useMemo } from "react";
import { useMutation } from "react-query";
import APIClient from "../../services/api-client";
import { AxiosError } from "axios";
import ErrorResponse from "../../types/ErrorResponse";

const useMutateData = <T, B>(endpoint: string) => {
  const apiClient = useMemo(() => new APIClient<T>(endpoint), [endpoint]);

  return useMutation<T, Error, B>({
    mutationFn: async (body) => {
      try {
        const UserResponse = await apiClient.post(body);
        const user = UserResponse.data;
        return user;
      } catch (err) {
        throw new Error(
          (err as AxiosError<ErrorResponse>).response?.data.error
        );
      }
    },
  });
};

export default useMutateData;
