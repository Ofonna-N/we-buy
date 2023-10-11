import AppDropDownMenu from "../../../../component/menus/AppDropDownMenu";
import RoutesPaths from "../../../../constants/RoutePaths";
import User from "../../../../types/User";
import NavLinkIconBtn from "../navbar/NavLinkIconBtn";

import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

type Props = {
  onLogOut: () => void;
  user: User | null | undefined;
};

const NavUserDropDownMenu = (props: Props) => {
  return (
    (props.user && (
      <AppDropDownMenu
        title={props.user.name}
        menuItems={[
          {
            label: "Profile",
            startIcon: <PersonIcon />,
            to: RoutesPaths.PROFILE_ROUTE,
          },
          {
            label: "Logout",
            startIcon: <LogoutIcon />,
            onClick: props.onLogOut,
          },
        ]}
      />
    )) || (
      <NavLinkIconBtn startIcon={<PersonIcon />} to={RoutesPaths.SIGN_IN_ROUTE}>
        Sign In
      </NavLinkIconBtn>
    )
  );
};

export default NavUserDropDownMenu;
