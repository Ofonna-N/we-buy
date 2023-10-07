import { Snackbar, Typography, Slide, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import { appSnackBarActions } from "../../slices/appSnackBarSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";

// Should only be displayed using a redux dispatched action
const AppSnackbar = () => {
  const snackBarState = useAppSelector(
    (state) => state.appSnackBarSlice.snackBar
  );

  // console.log(snackBarState);
  const dispatch = useAppDispatch();

  const Icon = () => {
    switch (snackBarState.useIcon?.icon) {
      case "success":
        return <CheckCircleIcon color="success" />;
      case "error":
        return <DangerousIcon color="error" />;
    }
  };

  return (
    <Snackbar
      open={snackBarState.open}
      //   open={true}
      autoHideDuration={3000}
      message={
        <Typography display={"flex"} gap={1}>
          {snackBarState.useIcon && <Icon />}
          {snackBarState.message}
        </Typography>
      }
      onClose={() => dispatch(appSnackBarActions.hideAppSnackBar())}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      TransitionComponent={Slide}
      action={
        <IconButton
          color="primary"
          onClick={() => dispatch(appSnackBarActions.hideAppSnackBar())}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

export default AppSnackbar;
