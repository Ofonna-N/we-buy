import AppDropDownMenu from "../../../../component/menus/AppDropDownMenu";
import RoutesPaths from "../../../../constants/RoutePaths";
import User from "../../../../types/User";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";

type Props = {
  user: User | null | undefined;
};

const NavAdminDropDownMenu = (props: Props) => {
  return (
    props.user &&
    props.user.isAdmin && (
      <AppDropDownMenu
        title={"Admin"}
        menuItems={[
          {
            label: "Users",
            startIcon: <PersonIcon />,
            to: RoutesPaths.ADMIN_ROUTE + RoutesPaths.USERS_ROUTE,
          },
          {
            label: "Orders",
            startIcon: <InventoryIcon />,
            to: RoutesPaths.ADMIN_ROUTE + RoutesPaths.ORDERS_ROUTE,
          },
          {
            label: "Products",
            startIcon: <ShoppingCartIcon />,
            to: RoutesPaths.ADMIN_ROUTE + RoutesPaths.PRODUCTS_ROUTE,
          },
        ]}
      />
    )
  );
};

export default NavAdminDropDownMenu;
