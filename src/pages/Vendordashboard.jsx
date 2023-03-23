import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BookIcon from "@mui/icons-material/Book";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import Bookings from "../components/Bookings";

import Services from "../components/Services";

const Vendordashboard = () => {
  const [component, setComponent] = useState("bookings");
  return (
    <div>
      <Box p="20px">
        <Typography variant="h6">Vendors Dashboard</Typography>
        <Box
          sx={{
            backgroundColor: "red",

            height: "3px",
            width: "100px",
          }}
        ></Box>
        <Box
          display="flex"
          p={5}
          alignItems="center"
          height="75vh"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
          justifyContent="space-around"
          marginTop="20px"
        >
          <Paper
            elevation={2}
            sx={{
              height: "300px",
              width: { xs: "350px", md: "250px" },
              display: "flex",
              p: 2,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar sx={{ bgcolor: "orange" }}>N</Avatar>
            <Typography variant="h5" sx={{ margin: "20px" }}>
              Vendor
            </Typography>
            <List>
              <ListItem
                onClick={() => setComponent("bookings")}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <BookIcon />
                <ListItemText>Bookings</ListItemText>
              </ListItem>
              <ListItem
                onClick={() => setComponent("services")}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <MiscellaneousServicesIcon />
                <ListItemText>Services</ListItemText>
              </ListItem>
            </List>
          </Paper>
          <Box
            sx={{
              width: { xs: "400px", md: "750px" },
              marginTop: { xs: "40px", md: "0px" },
              padding: { xs: "0 20px", md: "0px" },
            }}
            overflowX="auto"
          >
            {component === "bookings" ? <Bookings /> : <Services />}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Vendordashboard;
