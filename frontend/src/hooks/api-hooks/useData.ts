import { useEffect, useState } from "react";
import APIClient from "../../services/api-client";

import { AxiosError } from "axios";

const useData = <T>(endpoint: string) => {
  const apiClient = new APIClient<T>(endpoint);

  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState<AxiosError>({} as AxiosError);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const dataRes = await apiClient.get({ signal: controller.signal });
        setData(dataRes.data.data);
        setIsLoading(false);
        console.log(dataRes.data.data, "DATA");
      } catch (err) {
        const caughtError = err as AxiosError;
        if (caughtError.name === "CanceledError") return;
        console.log(err);
        setError(caughtError);
      }
    };

    getData();

    return () => {
      // console.log("aborting...");
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
};

export default useData;
