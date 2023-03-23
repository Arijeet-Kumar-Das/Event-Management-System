import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Vendor1 from "../Images/vendor1.jpg";
import Vendor2 from "../Images/vendor2.jpg";
import Vendor3 from "../Images/vendor3.jpg";
import Vendor4 from "../Images/vendor4.jpg";
import Vendor5 from "../Images/vendor5.jpg";
import Vendor6 from "../Images/vendor6.jpg";
const Vendors = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const open5 = Boolean(anchorEl5);
  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  const [anchorEl6, setAnchorEl6] = React.useState(null);
  const open6 = Boolean(anchorEl6);
  const handleClick6 = (event) => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClose6 = () => {
    setAnchorEl6(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6">Event Categories</Typography>
      <Box
        sx={{
          backgroundColor: "red",

          height: "3px",
          width: "100px",
        }}
      ></Box>
      <Grid container spacing={3} sx={{ marginTop: "10px" }}>
        <Grid item md={6} xs={12}>
          <Paper
            elevation={1}
            sx={{
              height: "130px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundImage:
                "linear-gradient(to bottom right, lightblue, white)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Venues{" "}
                <ExpandMoreIcon
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Typography>{" "}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose2}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>View All Venues</MenuItem>
                <MenuItem onClick={handleClose}>Resorts</MenuItem>
                <MenuItem onClick={handleClose}>Hotels</MenuItem>
              </Menu>
              <Typography variant="p">Halls, Auditoriums</Typography>
            </Box>
            <Box>
              <img
                src={Vendor1}
                style={{
                  borderTopLeftRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  marginLeft: "20px",
                }}
                alt=""
                width="300px"
                height="200px"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper
            elevation={1}
            sx={{
              height: "130px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundImage:
                "linear-gradient(to bottom right, orange, white)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Buisness
                <ExpandMoreIcon
                  aria-controls={open2 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
                />
              </Typography>{" "}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose2}>View Buiness events</MenuItem>
                <MenuItem onClick={handleClose2}>Auditoriums</MenuItem>
              </Menu>
              <Typography variant="p">Halls, Auditoriums</Typography>
            </Box>
            <Box>
              <img
                src={Vendor2}
                style={{
                  borderTopLeftRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  marginLeft: "20px",
                }}
                width="300px"
                height="200px"
                alt=""
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper
            elevation={1}
            sx={{
              height: "130px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundImage:
                "linear-gradient(to bottom right, lightgreen, white)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Foods
                <ExpandMoreIcon
                  aria-controls={open3 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? "true" : undefined}
                  onClick={handleClick3}
                />
              </Typography>{" "}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl3}
                open={open3}
                onClose={handleClose3}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose3}>View All Foods</MenuItem>
                <MenuItem onClick={handleClose3}>Restaurants</MenuItem>
                <MenuItem onClick={handleClose3}>Hotels</MenuItem>
              </Menu>
              <Typography variant="p">Halls, Auditoriums</Typography>
            </Box>
            <Box>
              <img
                src={Vendor3}
                style={{
                  borderTopLeftRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  marginLeft: "20px",
                }}
                width="300px"
                height="200px"
                alt=""
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper
            elevation={1}
            sx={{
              height: "130px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundImage:
                "linear-gradient(to bottom right, purple, white)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Festival
                <ExpandMoreIcon
                  aria-controls={open4 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open4 ? "true" : undefined}
                  onClick={handleClick4}
                />
              </Typography>{" "}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl4}
                open={open4}
                onClose={handleClose4}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose4}>View All Festivals</MenuItem>
                <MenuItem onClick={handleClose4}>Temples</MenuItem>
                <MenuItem onClick={handleClose4}>Auditoriums</MenuItem>
              </Menu>
              <Typography variant="p">Halls, Auditoriums</Typography>
            </Box>
            <Box>
              <img
                src={Vendor4}
                style={{
                  borderTopLeftRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  marginLeft: "20px",
                }}
                width="300px"
                height="200px"
                alt=""
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper
            elevation={1}
            sx={{
              height: "130px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundImage: "linear-gradient(to bottom right, red, white)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Sports
                <ExpandMoreIcon
                  aria-controls={open5 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open5 ? "true" : undefined}
                  onClick={handleClick5}
                />
              </Typography>{" "}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl5}
                open={open5}
                onClose={handleClose5}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose5}>View All Sports</MenuItem>
                <MenuItem onClick={handleClose5}>Cricket</MenuItem>
                <MenuItem onClick={handleClose5}>Football</MenuItem>
              </Menu>
              <Typography variant="p">Halls, Auditoriums</Typography>
            </Box>
            <Box>
              <img
                src={Vendor5}
                style={{
                  borderTopLeftRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  marginLeft: "20px",
                }}
                width="300px"
                height="200px"
                alt=""
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper
            elevation={1}
            sx={{
              height: "130px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundImage:
                "linear-gradient(to bottom right, skyblue, white)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Music
                <ExpandMoreIcon
                  aria-controls={open6 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open6 ? "true" : undefined}
                  onClick={handleClick6}
                />
              </Typography>{" "}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl6}
                open={open6}
                onClose={handleClose6}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose6}>View Music events</MenuItem>
                <MenuItem onClick={handleClose6}>Singers</MenuItem>
                <MenuItem onClick={handleClose6}>Musicians</MenuItem>
              </Menu>
              <Typography variant="p">Halls, Auditoriums</Typography>
            </Box>
            <Box>
              <img
                src={Vendor6}
                style={{
                  borderTopLeftRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  marginLeft: "20px",
                }}
                width="300px"
                height="200px"
                alt=""
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Vendors;
