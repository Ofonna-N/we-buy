import { appSnackBarActions } from "../../slices/appSnackBarSlice";
import { SnackBarIconType } from "../../types/SnackBar";
import { useAppDispatch } from "../redux-hooks/appStoreHooks";

const useShowSnackBar = () => {
  const dispactch = useAppDispatch();
  const showSnackBar = (message: string, icon: SnackBarIconType) => {
    dispactch(
      appSnackBarActions.showAppSnackBar({
        open: true,
        message: message,
        useIcon: {
          icon,
        },
      })
    );
  };

  return { showSnackBar };
};

export default useShowSnackBar;
