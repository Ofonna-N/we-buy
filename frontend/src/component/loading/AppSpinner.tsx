import { CircularProgress, CircularProgressProps } from "@mui/material";

type Sizes = "large" | "medium" | "small" | "xLarge";
type Props = {
  sx?: CircularProgressProps["sx"];
  size?: Sizes;
};

const AppSpinner = (props: Props) => {
  const { size, ...other } = props;

  const spinnerSize: Record<Sizes, number> = {
    xLarge: 35,
    large: 25,
    medium: 20,
    small: 15,
  };
  return <CircularProgress {...other} size={spinnerSize[size || "small"]} />;
};

export default AppSpinner;
