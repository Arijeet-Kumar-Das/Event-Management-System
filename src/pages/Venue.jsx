import React from "react";
import VenueImage from "../Images/venue-1.jpg";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhotoIcon from "@mui/icons-material/Photo";
import ModeIcon from "@mui/icons-material/Mode";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ImageList from "@mui/material/ImageList";
import EmailIcon from "@mui/icons-material/Email";
import ImageListItem from "@mui/material/ImageListItem";

import VenueForm from "../components/VenueForm";

const Venue = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  return (
    <div style={{ padding: "20px" }}>
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box display="flex" flexDirection="column">
          <img
            src={VenueImage}
            alt=""
            style={{ maxWidth: "800px", maxHeight: "400px" }}
          />
          <Paper sx={{ borderRadius: "0px", p: 2 }}>
            <BottomNavigation showLabels>
              <BottomNavigationAction
                label="Like"
                icon={<FavoriteBorderIcon />}
              />
              <BottomNavigationAction label="Albums" icon={<PhotoIcon />} />
              <BottomNavigationAction label="Reviews" icon={<ModeIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={5}
          flexDirection="column"
          justifyContent="center"
          sx={{ width: { xs: "90vw", md: "50vw" } }}
        >
          <Paper
            sx={{
              width: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: "0px",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              justifyContent="space-between"
            >
              <Typography variant="h5" sx={{ fontWeight: "550" }}>
                Maniram Dewan Trade Centre{" "}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                gap={1}
              >
                <IconButton
                  sx={{
                    backgroundColor: "#5BA829",
                    borderRadius: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <StarRateIcon sx={{ color: "white", fontSize: "large" }} />
                  <Typography
                    variant="p"
                    sx={{ color: "white", fontSize: "20px" }}
                  >
                    4.5
                  </Typography>
                </IconButton>
                <Typography variant="p" sx={{ color: "grey" }}>
                  (20 reviews)
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ color: "grey", fontSize: "large" }} />
              <Typography variant="p" sx={{ color: "grey" }}>
                {" "}
                Betkuchi, NH 37, Near Balaji Temple, Guwahati,{" "}
              </Typography>
            </Box>
            <Divider />
            <Box display="flex" alignItems="center" gap={1}>
              <LocalPhoneIcon sx={{ color: "green", fontSize: "large" }} />
              <Typography variant="p" sx={{ color: "green" }}>
                Contact
              </Typography>
            </Box>
          </Paper>

          {/* Pricing */}

          <Paper
            sx={{
              width: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: "0px",
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" sx={{ fontWeight: "550" }}>
                Pricing Info
              </Typography>
              <Button variant="contained" color="error">
                Book Now
              </Button>
            </Box>
            <Divider />
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" gap={1}>
                <Typography variant="p">Starting Price of room: </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: "large", color: "red" }} />
                  <Typography variant="p" sx={{ color: "red" }}>
                    1300
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={1}>
                <Typography variant="p">Starting Price of decor: </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: "large", color: "red" }} />
                  <Typography variant="p" sx={{ color: "red" }}>
                    1500
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box display="flex" flexDirection="column" gap={1}>
                <Box display="flex" gap={1}>
                  <Typography variant="p">Starting Price of veg: </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CurrencyRupeeIcon
                      sx={{ fontSize: "large", color: "red" }}
                    />
                    <Typography variant="p" sx={{ color: "red" }}>
                      1300
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" gap={1}>
                  <Typography variant="p">
                    Starting Price of non veg:{" "}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CurrencyRupeeIcon
                      sx={{ fontSize: "large", color: "red" }}
                    />
                    <Typography variant="p" sx={{ color: "red" }}>
                      1500
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box
              display="flex"
              justifyContent="space-evenly"
              marginTop="10px"
              sx={{ flexDirection: { xs: "column", md: "row" }, gap: 2 }}
            >
              <Button
                variant="contained"
                startIcon={<EmailIcon />}
                color="error"
                sx={{ borderRadius: "50px" }}
              >
                Send Message
              </Button>
              <Button
                variant="contained"
                startIcon={<LocalPhoneIcon />}
                color="success"
                sx={{ borderRadius: "50px" }}
              >
                View Contact
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={3} sx={{ marginTop: "10px" }}>
          <Grid item md={6} sm={12}>
            <VenueForm />
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h5">Albums</Typography>
            <Box
              sx={{ width: "60px", height: "3px", backgroundColor: "red" }}
            ></Box>
            <ImageList
              sx={{ width: 500, height: 450, width: "100%" }}
              cols={3}
              rowHeight={164}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Venue;
