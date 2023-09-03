//#region Imports
import {
  AppBar,
  Box,
  Container,
  IconButton,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
  Link,
  Badge,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
//hooks
import useModeCtx from "../../hooks/useModeCtx";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

// local modules
import NavLinkIconBtn from "./NavLinkIconBtn";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import { appMenuAcitons } from "../../slices/appMenuSlice";
import RoutesPaths from "../../constants/RoutePaths";

import AppDropDownMenu from "../menus/AppDropDownMenu";
import useMutateLogout from "../../hooks/api-hooks/auth/useMutateLogout";
import LogoutIcon from "@mui/icons-material/Logout";

//#endregion

const Navbar = () => {
  const darkModeCtx = useModeCtx();
  const cartQty = useAppSelector((state) => state.cartSlice.qty);
  const isToggled = useAppSelector((state) => state.appMenuSlice.isToggled);
  const user = useAppSelector((state) => state.userSlice.userInfo);
  const dispach = useAppDispatch();

  const { mutate } = useMutateLogout();

  const onLogOut = () => {
    mutate(null);
  };

  return (
    <AppBar position="relative">
      <Container fixed disableGutters>
        <Toolbar component={"nav"} sx={{ paddingBlock: "1rem" }}>
          <IconButton
            size="large"
            sx={{
              display: { xs: "block", sm: "none" },
              color: "white",
            }}
            aria-label="Toggle Menu"
            aria-expanded={isToggled}
            role="button"
            aria-haspopup="menu"
            onClick={() => dispach(appMenuAcitons.toggleMenu({}))}
          >
            <MenuIcon />
          </IconButton>
          <Link
            component={RouterLink}
            to={RoutesPaths.HOME_ROUTE}
            variant="h3"
            sx={{
              flexGrow: "1",
              textAlign: {
                xs: "center",
                sm: "left",
                textDecoration: "none",
                color: "whitesmoke",
              },
            }}
          >
            We Buy
          </Link>
          <Box display={{ xs: "none", sm: "flex" }} gap={"1rem"}>
            <NavLinkIconBtn
              to={RoutesPaths.CART_ROUTE}
              startIcon={
                <Badge
                  invisible={cartQty <= 0}
                  badgeContent={cartQty}
                  color={darkModeCtx.mode === "dark" ? "primary" : "secondary"}
                  max={99}
                >
                  <ShoppingCartIcon />
                </Badge>
              }
            >
              Cart
            </NavLinkIconBtn>
            {(user?._id && (
              <AppDropDownMenu
                title={user.name}
                menuItems={[
                  <NavLinkIconBtn
                    startIcon={<PersonIcon />}
                    variantColor={
                      darkModeCtx.mode === "dark" ? "white" : "black"
                    }
                  >
                    Profile
                  </NavLinkIconBtn>,
                  <NavLinkIconBtn
                    startIcon={<LogoutIcon />}
                    onClick={onLogOut}
                    variantColor={
                      darkModeCtx.mode === "dark" ? "white" : "black"
                    }
                  >
                    Logout
                  </NavLinkIconBtn>,
                ]}
              />
            )) || (
              <NavLinkIconBtn
                startIcon={<PersonIcon />}
                to={RoutesPaths.SIGN_IN_ROUTE}
              >
                Sign In
              </NavLinkIconBtn>
            )}
          </Box>
          <FormControlLabel
            control={<Switch size="small" />}
            label={
              <Typography
                color={"rgba(255, 255, 255, 0.5)"}
                fontSize={"0.75rem"}
                aria-label="dark mode"
              >
                Dark
              </Typography>
            }
            labelPlacement="start"
            onChange={() => darkModeCtx.toggleMode()}
            checked={darkModeCtx.mode === "dark"}
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
