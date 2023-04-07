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

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhotoIcon from "@mui/icons-material/Photo";
import ModeIcon from "@mui/icons-material/Mode";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ImageList from "@mui/material/ImageList";
import EmailIcon from "@mui/icons-material/Email";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import VenueForm from "../components/VenueForm";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Venue = () => {
  // Image Slider
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1676508952268-2b84e239859e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1676487918369-0e3b85e5240b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1661712963074-a1b421de9a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // albums
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
        <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 430,
                      display: "block",
                      maxWidth: 600,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />

          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton>
                <FavoriteBorderIcon sx={{ fontSize: "large" }} />
              </IconButton>
              <Typography variant="p">Like</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton>
                <PhotoIcon sx={{ fontSize: "large" }} />
              </IconButton>
              <Typography variant="p">Albums</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton>
                <ModeIcon sx={{ fontSize: "large" }} />
              </IconButton>
              <Typography variant="p">Reviews</Typography>
            </Box>
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
