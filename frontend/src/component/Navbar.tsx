// mui components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";

//hooks
import useModeCtx from "../hooks/useModeCtx";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const Navbar = () => {
  const darkModeCtx = useModeCtx();
  const theme = useTheme();
  const [toggled, setToggled] = useState(false);
  const LinkBtn = styled(Button)(() => ({
    color: "white",
    textDecoration: "none",
  }));

  const handleDrawerToggle = () => {
    setToggled((prev) => !prev);
  };

  return (
    <>
      <AppBar position="relative">
        <Toolbar component={"nav"}>
          <IconButton
            size="large"
            sx={{
              display: { xs: "block", sm: "none" },
              color: "white",
            }}
            aria-label="menu button"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component={"span"}
            aria-label="logo"
            sx={{
              flexGrow: "1",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            We Buy
          </Typography>
          <Box display={{ xs: "none", sm: "flex" }} gap={"1rem"}>
            <LinkBtn href="#" startIcon={<ShoppingCartIcon />}>
              Cart
            </LinkBtn>
            <LinkBtn href="#" startIcon={<PersonIcon />}>
              Sign In
            </LinkBtn>
          </Box>
          <FormControlLabel
            control={<Switch size="small" />}
            label={
              <Typography
                color={"rgba(255, 255, 255, 0.5)"}
                fontSize={"0.75rem"}
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
            height: "calc(100% - 56px)",
            top: "56px",
            width: "200px",
          },
        }}
        ModalProps={{
          sx: {
            "& .MuiModal-backdrop": {
              position: "relative",
              height: "calc(100%)",
            },
            height: "calc(100% - 56px)",
            top: "56px",
          },
        }}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableRipple>
              <ListItemText>
                <FormControlLabel
                  control={<Switch size="small" />}
                  label={
                    <Typography
                      color={"rgba(255, 255, 255, 0.5)"}
                      ml={"1.65rem"}
                    >
                      Dark
                    </Typography>
                  }
                  labelPlacement="end"
                  onChange={() => darkModeCtx.toggleMode()}
                  checked={darkModeCtx.mode === "dark"}
                />
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
