import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import NavLinkIconBtn from "../../pages/layout/components/navbar/NavLinkIconBtn";
import useModeCtx from "../../hooks/useModeCtx";

type Prop = {
  title: string;
  menuItems: dropDownMenuLinkProps[];
};
type dropDownMenuLinkProps = {
  startIcon?: React.ReactNode;
  to?: string;
  label: string;
  onClick?: () => void;
};
const AppDropDownMenu = (props: Prop) => {
  const { title, menuItems } = props;
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const darkModeCtx = useModeCtx();
  return (
    <Box>
      <Button
        color="secondary"
        ref={anchorRef}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        endIcon={open ? <ArrowDropUp /> : <ArrowDropDownIcon />}
      >
        {title}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorRef.current}
        onClose={() => setOpen(false)}
      >
        {menuItems?.map((item, i) => (
          <MenuItem key={i}>
            {" "}
            <NavLinkIconBtn
              startIcon={item.startIcon}
              to={item.to}
              variantColor={darkModeCtx.mode === "dark" ? "white" : "black"}
              onClick={item.onClick}
            >
              {item.label}
            </NavLinkIconBtn>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppDropDownMenu;
