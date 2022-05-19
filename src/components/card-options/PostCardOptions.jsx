import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { EditIcon, FollowIcon, RemoveIcon } from "../../assets/icons/icons";
import { deletePost, openEditModal } from "../../pages/home/postSlice";

export function PostCardOptions({ item, setPostCardOption }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <Box
      className="box-option"
      sx={{
        width: "100%",
        maxWidth: "fit-content",
        bgcolor: "background.paper",
        position: "absolute",
        right: "0",
        border: "1px solid",
        borderRadius: "var(--BORDER-RADIUS",
      }}
      onClick={() => setPostCardOption(false)}
    >
      <nav aria-label="main mailbox folders">
        <List disablePadding>
          {user.username === item.username && (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ color: "red" }}
                  onClick={() => dispatch(deletePost(item))}
                >
                  <ListItemIcon sx={{ fontSize: "1.5rem", color: "inherit" }}>
                    <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => dispatch(openEditModal(item))}>
                  <ListItemIcon sx={{ fontSize: "1.5rem", color: "inherit" }}>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Edit" />
                </ListItemButton>
              </ListItem>
            </>
          )}
          {user.username !== item.username && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FollowIcon />
                </ListItemIcon>
                <ListItemText primary="Follow" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
    </Box>
  );
}
