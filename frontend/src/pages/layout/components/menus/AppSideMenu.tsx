//#region Imports
import {
  ListItemButton,
  ListItemIcon,
  Badge,
  ListItemText,
  FormControlLabel,
  Switch,
  Typography,
  Drawer,
  List,
  ListItem,
  useTheme,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { appMenuAcitons } from "../../../../slices/appMenuSlice";
import { Link as RouterLink } from "react-router-dom";
import RoutesPaths from "../../../../constants/RoutePaths";
import useNavMenuSharedState from "../../../../hooks/common/useNavMenuSharedState";
import NavUserDropDownMenu from "../common/NavUserDropDownMenu";
import NavAdminDropDownMenu from "../common/NavAdminDropDownMenu";
//#endregion

const AppSideMenu = () => {
  const { darkModeCtx, cartQty, isToggled, user, dispach, logoutApi } =
    useNavMenuSharedState();

  const theme = useTheme();

  const navBarHeight = "88.01px";

  const sideMenuNavItems = [
    <>
      {user && !user.isAdmin && (
        <ListItemButton component={RouterLink} to={RoutesPaths.CART_ROUTE}>
          <ListItemIcon>
            <Badge
              invisible={cartQty <= 0}
              badgeContent={cartQty}
              color={darkModeCtx.mode === "dark" ? "primary" : "secondary"}
              max={99}
            >
              <ShoppingCartIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItemButton>
      )}
    </>,
    <Box pl={"1rem"}>
      <NavUserDropDownMenu
        user={user}
        onLogOut={() => logoutApi.mutate(null)}
      />
    </Box>,
    <Box pl={"1rem"}>
      <NavAdminDropDownMenu user={user} />
    </Box>,
    <ListItemButton disableRipple>
      <ListItemText>
        <FormControlLabel
          control={<Switch size="small" />}
          label={
            <Typography
              color={"rgba(255, 255, 255, 0.5)"}
              ml={"1.65rem"}
              aria-label="dark mode"
            >
              Dark
            </Typography>
          }
          labelPlacement="end"
          onChange={() => darkModeCtx.toggleMode()}
          checked={darkModeCtx.mode === "dark"}
        />
      </ListItemText>
    </ListItemButton>,
  ];

  return (
    <Drawer
      open={isToggled}
      variant="temporary"
      PaperProps={{
        sx: {
          // position: "relative",
          backgroundColor:
            darkModeCtx.mode === "light"
              ? theme.palette.primary.light
              : theme.palette.grey[900],
          height: `calc(100% - ${navBarHeight})`,
          top: navBarHeight,
          width: "200px",
        },
      }}
      ModalProps={{
        sx: {
          "& .MuiModal-backdrop": {
            position: "relative",
            height: "calc(100%)",
          },
          height: `calc(100% - ${navBarHeight})`,
          top: navBarHeight,
        },
      }}
      onClose={() => dispach(appMenuAcitons.toggleMenu({}))}
      sx={{ display: { xs: "block", sm: "none" } }}
      role="menu"
    >
      <List>
        {sideMenuNavItems.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppSideMenu;
