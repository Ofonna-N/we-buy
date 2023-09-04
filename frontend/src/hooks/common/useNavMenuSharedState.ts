import useMutateLogout from "../api-hooks/auth/useMutateLogout";
import { useAppSelector, useAppDispatch } from "../redux-hooks/appStoreHooks";
import useModeCtx from "../useModeCtx";

const useNavMenuSharedState = () => {
  const darkModeCtx = useModeCtx();
  const cartQty = useAppSelector((state) => state.cartSlice.qty);
  const isToggled = useAppSelector((state) => state.appMenuSlice.isToggled);
  const user = useAppSelector((state) => state.userSlice.userInfo);
  const dispach = useAppDispatch();

  const logoutApi = useMutateLogout();

  return {
    darkModeCtx,
    cartQty,
    isToggled,
    user,
    dispach,
    logoutApi,
  };
};

export default useNavMenuSharedState;
