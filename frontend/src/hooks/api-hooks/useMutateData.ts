import { useMemo } from "react";
import { useMutation } from "react-query";
import APIClient from "../../services/api-client";

const useMutateData = <T>(endpoint: string) => {
  const apiClient = useMemo(() => new APIClient<T>(endpoint), [endpoint]);

  return useMutation(() => {
    return apiClient.post();
  });
};

export default useMutateData;
