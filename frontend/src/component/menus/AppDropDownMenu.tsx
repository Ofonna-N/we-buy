import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";

type Prop = {
  title: string;
};

const AppDropDownMenu = (props: Prop) => {
  const { title } = props;
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
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
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AppDropDownMenu;
