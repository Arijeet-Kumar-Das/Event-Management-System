import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableCell,
  TableHead,
  tableCellClasses,
  TableRow,
  TableBody,
  Tooltip,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import Bookings from "../components/Bookings";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useState } from "react";
import Services from "../components/Services";
import AddServices from "../components/AddServices";
import UserBookings from "../components/UserBookings";

const UserDashboard = () => {
  const [component, setComponent] = useState("bookings");
  let NavItem;
  if (component === "bookings") {
    NavItem = <UserBookings />;
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 10,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            width: { xs: "100%", md: "20%" },
            minHeight: { xs: "200px", md: "88vh" },
            overflowY: "auto",
          }}
        >
          <List>
            <ListItem onClick={() => setComponent("bookings")}>
              <IconButton>
                <LibraryBooksIcon sx={{ color: "red" }} />
              </IconButton>
              <ListItemText
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                Bookings
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
        {NavItem}
      </Box>
    </div>
  );
};

export default UserDashboard;
