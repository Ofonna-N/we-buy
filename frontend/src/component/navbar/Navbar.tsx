import {
  AppBar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
  Drawer,
  useTheme,
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
import { useState } from "react";

// local modules
import NavLinkIconBtn from "./NavLinkIconBtn";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";

const Navbar = () => {
  const darkModeCtx = useModeCtx();
  const theme = useTheme();
  const [toggled, setToggled] = useState(false);
  const navBarHeight = "88.01px";

  const cartQty = useAppSelector((state) => state.cartSlice.qty);

  const handleDrawerToggle = () => {
    setToggled((prev) => !prev);
  };

  const sideMenuNavItems = [
    <ListItemButton>
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
    </ListItemButton>,
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Sign In" />
    </ListItemButton>,
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

  // console.log("nav bar render...");
  return (
    <>
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
              aria-expanded={toggled}
              role="button"
              aria-haspopup="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Link
              component={RouterLink}
              to={"/"}
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
              {/* <Typography
                variant="h4"
                component={"span"}
                aria-label="logo"
                role=""
              >
              </Typography> */}
            </Link>
            <Box display={{ xs: "none", sm: "flex" }} gap={"1rem"}>
              <NavLinkIconBtn
                href="#"
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
              <NavLinkIconBtn href="#" startIcon={<PersonIcon />}>
                Sign In
              </NavLinkIconBtn>
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
      <Drawer
        open={toggled}
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
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
        role="menu"
      >
        <List>
          {sideMenuNavItems.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
