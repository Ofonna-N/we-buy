import Button, { ButtonProps } from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
// const NavLinkIconBtn = styled(Button)<ButtonProps>(() => ({
//   color: "white",
//   textDecoration: "none",
// }));
const NavLinkIconBtn = (props: ButtonProps & { to: string }) => {
  const { sx, to, ...otherProps } = props;
  //   styled(Button)<ButtonProps>(() => ({
  //   color: "white",
  //   textDecoration: "none",
  // }));

  return (
    <Button
      {...otherProps}
      sx={{
        ...sx,
        color: "white",
        textDecoration: "none",
      }}
      component={RouterLink as any}
      to={to}
    />
  );
};

export default NavLinkIconBtn;
