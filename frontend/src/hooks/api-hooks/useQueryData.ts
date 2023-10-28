import { useMemo } from "react";
import APIClient from "../../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";
import { useQuery } from "react-query";
import ErrorResponse from "../../types/ErrorResponse";

const useQueryData = <T>(endpoint: string, key?: string) => {
  const apiClient = useMemo(() => new APIClient<T>(endpoint), [endpoint]);

  return useQuery<T, AxiosError<ErrorResponse>>({
    queryKey: key ? [endpoint, key] : [endpoint],
    queryFn: async () => {
      const response = await apiClient.get();
      // throw new Error("BOOM");
      return response.data;
    },
    staleTime: ms("5m"),
  });

  // const [data, setData] = useState<T>({} as T);
  // const [error, setError] = useState<AxiosError>({} as AxiosError);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const getData = async () => {
  //     try {
  //       const dataRes = await apiClient.get({ signal: controller.signal });
  //       setData(dataRes.data.data);
  //       console.log(dataRes.data.data, "DATA");
  //     } catch (err) {
  //       const caughtError = err as AxiosError;
  //       if (caughtError.name === "CanceledError") return;
  //       console.log(err);
  //       setError(caughtError);
  //     }
  //     setIsLoading(false);
  //   };

  //   getData();

  //   return () => {
  //     // console.log("aborting...");
  //     controller.abort();
  //   };
  // }, [apiClient]);

  // return { data, error, isLoading };
};

export default useQueryData;
