import { Link, LinkProps } from "@mui/material";
import { NavLinkProps, Link as RouterLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to?: NavLinkProps["to"];
  sx?: LinkProps["sx"];
};

const AppNavLink = (props: Props) => {
  const { children, to, ...other } = props;
  return (
    <Link underline="always" {...other} component={RouterLink} to={to || "#"}>
      {children}
    </Link>
  );
};

export default AppNavLink;
