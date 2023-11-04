"use client";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

interface props {
  buttonElement: JSX.Element;
  menuItems: JSX.Element | JSX.Element[];
}

export default function CommonMenu({ buttonElement, menuItems }: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        component={"div"}
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        onClick={handleClick}
      >
        {buttonElement}
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {Array.isArray(menuItems)
          ? menuItems.map((singleItem, index) => {
              return (
                <MenuItem onClick={handleClose} key={(index + 1) * 6}>
                  {singleItem}
                </MenuItem>
              );
            })
          : (menuItems as JSX.Element)}
      </Menu>
    </React.Fragment>
  );
}
