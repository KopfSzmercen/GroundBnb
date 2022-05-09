import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, List, Popover } from "@mui/material";
import React from "react";
import PopoverOptions from "./PopoverOptions";

const NavPopover: React.FC<{ currentUser: boolean }> = ({ currentUser }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        aria-label="user-options"
        onClick={handleClick}
        color="primary"
        size="large"
        sx={{
          padding: "1px",
          ":hover": {
            color: "primary.light"
          }
        }}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Popover
        data-testid="popover"
        aria-label="options-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        sx={{
          borderRadius: "5px",
          padding: "5px"
        }}
      >
        <List
          sx={{
            borderRadius: "5px",
            padding: "10px"
          }}
        >
          <PopoverOptions currentUser={currentUser} />
        </List>
      </Popover>
    </>
  );
};

export default NavPopover;
