import useMutateData from "../useMutateData";

const useMutateLogin = () => {
  return useMutateData("/login");
};

export default useMutateLogin;
