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
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6">Event Categories</Typography>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
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
                onClose={handleClose}
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
                onClose={handleClose}
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
                onClose={handleClose}
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
                onClose={handleClose}
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
                onClose={handleClose}
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
                onClose={handleClose}
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
