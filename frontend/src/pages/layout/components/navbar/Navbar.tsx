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
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
//hooks

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// local modules
import NavLinkIconBtn from "./NavLinkIconBtn";

import { appMenuAcitons } from "../../../../slices/appMenuSlice";
import RoutesPaths from "../../../../constants/RoutePaths";

import useNavMenuSharedState from "../../../../hooks/common/useNavMenuSharedState";
import NavUserDropDownMenu from "../common/NavUserDropDownMenu";
import NavAdminDropDownMenu from "../common/NavAdminDropDownMenu";
import AppTextField from "../../../../component/input/AppTextField";
import { productsSearchKeywordActions } from "../../../../slices/productsSearchKeywordSlice";
import React from "react";

//#endregion

const Navbar = () => {
  const { darkModeCtx, cartQty, isToggled, user, dispach, logoutApi } =
    useNavMenuSharedState();

  const onLogOut = () => {
    logoutApi.mutate(null);
  };
  const keywordRef = React.useRef("");

  const updateProductsSearchKeyword = (keyword: string) => {
    dispach(productsSearchKeywordActions.updateProductsSearchKeyword(keyword));
  };

  return (
    <AppBar position="relative">
      <Container fixed disableGutters>
        <Toolbar
          component={"nav"}
          sx={{
            paddingBlock: "1rem",
            gap: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
              // flexGrow: "1",
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
          <Stack sx={{ maxWidth: "500px" }} flexGrow={1} alignSelf={"center"}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateProductsSearchKeyword("keywordRef.current");
              }}
              style={{ width: "100%" }}
            >
              <AppTextField
                type={"text"}
                id={"search"}
                label="Search"
                disbaleBottomMargin
                onChange={(e) => {
                  // console.log(e.target.value);
                  if (e.target.value === "") {
                    updateProductsSearchKeyword("");
                  }
                  keywordRef.current = e.target.value;
                }}
                useEndAdornment={{
                  icon: "search",
                  onClick() {
                    updateProductsSearchKeyword(keywordRef.current);
                  },
                }}
                fullWidth
              />
            </form>
          </Stack>
          <Box display={"flex"} alignItems={"center"}>
            <Box display={{ xs: "none", sm: "flex" }} gap={"1rem"}>
              {!user?.isAdmin && (
                <NavLinkIconBtn
                  to={RoutesPaths.CART_ROUTE}
                  startIcon={
                    <Badge
                      invisible={cartQty <= 0}
                      badgeContent={cartQty}
                      color={
                        darkModeCtx.mode === "dark" ? "primary" : "secondary"
                      }
                      max={99}
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  }
                >
                  Cart
                </NavLinkIconBtn>
              )}
              <NavUserDropDownMenu user={user} onLogOut={onLogOut} />
              <NavAdminDropDownMenu user={user} />
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
