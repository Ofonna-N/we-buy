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
} from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks/appStoreHooks";
import useModeCtx from "../../hooks/useModeCtx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { appMenuAcitons } from "../../slices/appMenuSlice";
import { Link as RouterLink } from "react-router-dom";
//#endregion

const AppSideMenu = () => {
  const darkModeCtx = useModeCtx();
  const cartQty = useAppSelector((state) => state.cartSlice.qty);
  const theme = useTheme();
  const isToggled = useAppSelector((state) => state.appMenuSlice.isToggled);
  const dispach = useAppDispatch();
  const navBarHeight = "88.01px";

  const sideMenuNavItems = [
    <ListItemButton component={RouterLink} to="/cart">
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
