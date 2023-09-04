import Button, { ButtonProps } from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  variantColor?: string;
};

const NavLinkIconBtn = (props: ButtonProps & Props & { to?: string }) => {
  const { sx, to, variantColor, ...otherProps } = props;

  // variant color should have more effect on the look of this button, this
  // is definitely one that will need major refactor in the future
  const textColor = variantColor || "white";

  return (
    <Button
      {...otherProps}
      sx={{
        ...sx,
        color: textColor,
        textDecoration: "none",
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={RouterLink as any}
      to={to || "#"}
    />
  );
};

export default NavLinkIconBtn;
