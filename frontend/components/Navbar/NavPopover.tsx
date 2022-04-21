import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const NavPopover = () => {
  const router = useRouter();
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
          <ListItem button onClick={() => router.push("/auth/login")}>
            <ListItemText primary="Log in" />
          </ListItem>

          <ListItem
            button
            divider
            onClick={() => router.push("/auth/register")}
          >
            <ListItemText primary="Register" />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default NavPopover;
