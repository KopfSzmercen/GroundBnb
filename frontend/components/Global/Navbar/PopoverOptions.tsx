import { ListItem, ListItemText, Divider } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useLogOut } from "./hooks/useLogout";

const PopoverOptions: React.FC<{
  currentUser: boolean;
}> = ({ currentUser }) => {
  const router = useRouter();
  const { mutate, isLoading } = useLogOut();

  if (!currentUser) {
    return (
      <>
        <ListItem
          button
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          <ListItemText primary="Log in" />
        </ListItem>

        <ListItem
          button
          divider
          onClick={() => {
            router.push("/auth/register");
          }}
        >
          <ListItemText primary="Register" />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemText primary="Help" />
        </ListItem>
      </>
    );
  }

  return (
    <>
      <ListItem
        button
        onClick={() => {
          router.push("/myOffers");
        }}
      >
        <ListItemText primary="My offers" />
      </ListItem>

      <ListItem
        button
        divider
        onClick={() => {
          router.push("/settings");
        }}
      >
        <ListItemText primary="Settings" />
      </ListItem>

      <Divider />

      <ListItem
        button
        disabled={isLoading}
        onClick={() => {
          mutate();
        }}
      >
        <ListItemText primary="Log out" />
      </ListItem>
    </>
  );
};

export default PopoverOptions;
