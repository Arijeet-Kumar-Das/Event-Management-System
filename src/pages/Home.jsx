import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import VideocamIcon from "@mui/icons-material/Videocam";
import FestivalIcon from "@mui/icons-material/Festival";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import event1 from "../Images/event-1.jpg";
import event2 from "../Images/event-2.jpg";
import event3 from "../Images/event-3.jpg";
import Rating from "@mui/material/Rating";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PublicIcon from "@mui/icons-material/Public";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import team1 from "../Images/team-member-1.jpeg";
import team2 from "../Images/team-member-2.jpeg";
import team3 from "../Images/team-member-3.jpeg";
import team4 from "../Images/team-member-4.jpg";
import robotImg from "../Images/robot.png";
import wheelsImg from "../Images/wheels.png";
import { Link } from "react-router-dom";
const Home = () => {
  const PaperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
  };
  const [value, setValue] = useState(2);
  return (
    <div>
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/home-background-image.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="80vh"
          gap={2}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "30px", md: "50px" },
              fontWeight: "550",
              marginTop: "30px",
            }}
          >
            Let's Boom Together
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Plan Your Next Event
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <TextField
              sx={{ background: "white" }}
              variant="outlined"
              placeholder="Search for events"
              InputProps={{
                disableUnderline: true,
                style: {
                  height: "50px",
                  width: "350px",
                  borderRadius: "0",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              startIcon={<ArticleIcon sx={{ color: "red" }} />}
              sx={{
                backgroundColor: "white",
                borderRadius: "0",
                color: "black",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
            >
              All Categories
            </Button>
            <Button
              startIcon={<LocationOnIcon sx={{ color: "red" }} />}
              sx={{
                backgroundColor: "white",
                borderRadius: "0",
                color: "black",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
            >
              State, City
            </Button>
            <Button
              sx={{
                backgroundColor: "red",
                borderRadius: "0",
                color: "black",
                p: "0 30px",

                "&:hover": {
                  backgroundColor: "#a62b2b",
                },
              }}
            >
              Search
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex">
              <TextField
                sx={{ background: "white" }}
                variant="outlined"
                placeholder="Search for events"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    height: "40px",
                    width: "300px",
                    borderRadius: "0",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                sx={{
                  backgroundColor: "red",
                  borderRadius: "0",
                  color: "black",
                }}
              >
                Search
              </Button>
            </Box>
            <Box display="flex" gap={2} marginTop="20px">
              <Button
                startIcon={<ArticleIcon sx={{ color: "red" }} />}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0",
                  color: "black",
                  height: "45px",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                All Categories
              </Button>
              <Button
                startIcon={<LocationOnIcon sx={{ color: "red" }} />}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "0",
                  color: "black",
                  height: "45px",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                State, City
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        marginTop="20px"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          spacing={3}
          sx={{ marginTop: "20px", padding: "0px 50px" }}
        >
          {/* Update */}

          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <Paper elevation={3} sx={PaperStyle}>
                <IconButton sx={{ color: "red" }}>
                  <ApartmentIcon sx={{ height: "70px", width: "70px" }} />
                </IconButton>
                <Typography variant="p">Buisness</Typography>
                <Typography variant="p" sx={{ color: "gray" }}>
                  2 events
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <Paper elevation={3} sx={PaperStyle}>
                <IconButton sx={{ color: "red" }}>
                  <MusicNoteIcon sx={{ height: "70px", width: "70px" }} />
                </IconButton>
                <Typography variant="p">Music</Typography>
                <Typography variant="p" sx={{ color: "gray" }}>
                  1 events
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <Paper elevation={3} sx={PaperStyle}>
                <IconButton sx={{ color: "red" }}>
                  <FastfoodIcon sx={{ height: "70px", width: "70px" }} />
                </IconButton>
                <Typography variant="p">Food and Drink</Typography>
                <Typography variant="p" sx={{ color: "gray" }}>
                  3 events
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <Paper elevation={3} sx={PaperStyle}>
                <IconButton sx={{ color: "red" }}>
                  <FestivalIcon sx={{ height: "70px", width: "70px" }} />
                </IconButton>
                <Typography variant="p">Festival</Typography>
                <Typography variant="p" sx={{ color: "gray" }}>
                  3 events
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <Paper elevation={3} sx={PaperStyle}>
                <IconButton sx={{ color: "red" }}>
                  <SportsBasketballIcon
                    sx={{ height: "70px", width: "70px" }}
                  />
                </IconButton>
                <Typography variant="p">Sports</Typography>
                <Typography variant="p" sx={{ color: "gray" }}>
                  3 events
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
            >
              <Paper elevation={3} sx={PaperStyle}>
                <IconButton sx={{ color: "red" }}>
                  <VideocamIcon sx={{ height: "70px", width: "70px" }} />
                </IconButton>
                <Typography variant="p">Conference</Typography>
                <Typography variant="p" sx={{ color: "gray" }}>
                  3 events
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* To here */}
        </Grid>
      </Box>
      <Box marginTop="100px" backgroundColor="#ECEFF5" padding="20px 50px">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          Upcoming Events
        </Typography>
        <Box
          sx={{
            backgroundColor: "red",
            margin: "auto",
            height: "3px",
            width: "100px",
          }}
        ></Box>
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          gap={5}
          justifyContent="center"
          alignItems="center"
          marginTop="50px"
        >
          <Card sx={{ maxWidth: 300, maxheight: 400 }}>
            <CardMedia sx={{ height: 160 }} image={event1} title="event" />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                >
                  Sports
                </Button>
                <Button size="small">Price : $12</Button>
              </Box>
              <Box>
                <Typography variant="h6">
                  A Cycling competition for every Age
                </Typography>
                <Box display="flex" flexDirection="column" marginTop="10px">
                  <Box display="flex" alignItems="center" gap={2}>
                    <AccessAlarmIcon />
                    <Typography variant="p">
                      Thu, September 5, 2023, 12:00pm
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <LocationOnIcon />
                    <Typography variant="p">City Center, Guwahati</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Button sx={{ border: "1px solid black" }}>Book Tickets</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300, maxheight: 400 }}>
            <CardMedia sx={{ height: 160 }} image={event2} title="event2" />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                >
                  Music
                </Button>
                <Button size="small">Price : $12</Button>
              </Box>
              <Box>
                <Typography variant="h6">
                  A Singing competition for every Age
                </Typography>
                <Box display="flex" flexDirection="column" marginTop="10px">
                  <Box display="flex" alignItems="center" gap={2}>
                    <AccessAlarmIcon />
                    <Typography variant="p">
                      Sat, September 10, 2023, 11:00am
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <LocationOnIcon />
                    <Typography variant="p">Paltan Bazar, Guwahati</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Button sx={{ border: "1px solid black" }}>Book Tickets</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300, maxheight: 400 }}>
            <CardMedia sx={{ height: 160 }} image={event3} title="event3" />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                >
                  Food And Drink
                </Button>
                <Button size="small">Price : $12</Button>
              </Box>
              <Box>
                <Typography variant="h6">
                  A LifeStyle Expo for every Age
                </Typography>
                <Box display="flex" flexDirection="column" marginTop="10px">
                  <Box display="flex" alignItems="center" gap={2}>
                    <AccessAlarmIcon />
                    <Typography variant="p">
                      Mon, September 5, 2023, 9:00pm
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <LocationOnIcon />
                    <Typography variant="p">IIT Guwahati</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Button sx={{ border: "1px solid black" }}>Book Tickets</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Box marginTop="20px" padding="20px 50px">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          How it Work
        </Typography>
        <Box
          sx={{
            backgroundColor: "red",
            margin: "auto",
            height: "3px",
            width: "100px",
          }}
        ></Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ flexDirection: { xs: "column", md: "row" }, gap: 10 }}
          marginTop="50px"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="300px"
            gap={2}
          >
            <Paper
              elevation={3}
              sx={{
                borderRadius: "100px",
                backgroundColor: "antiquewhite",
                padding: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
              }}
            >
              <TravelExploreIcon
                sx={{ height: "100px", width: "100px", color: "red" }}
              />
            </Paper>
            <Typography variant="h6">Choose What to do</Typography>
            <Typography variant="p">
              Easily find your event via search System with multiple params
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="300px"
            gap={2}
          >
            <Paper
              elevation={3}
              sx={{
                borderRadius: "100px",
                backgroundColor: "antiquewhite",
                padding: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
              }}
            >
              <PublicIcon
                sx={{ height: "100px", width: "100px", color: "red" }}
              />
            </Paper>
            <Typography variant="h6">Book event that you like</Typography>
            <Typography variant="p">
              Choose your event, then book your ticket via payment system
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="300px"
            gap={2}
          >
            <Paper
              elevation={3}
              sx={{
                borderRadius: "100px",
                backgroundColor: "antiquewhite",
                padding: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
              }}
            >
              <KitesurfingIcon
                sx={{ height: "100px", width: "100px", color: "red" }}
              />
            </Paper>
            <Typography variant="h6">Get Ticket to Attend</Typography>
            <Typography variant="p">
              After Booking You will get ticket in email or you can download it
              in youe account
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Out team */}
      <Box
        backgroundColor="#ECEFF5"
        sx={{
          p: "30px 0px",
          height: "400px",
          display: "flex",

          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Our Team
          </Typography>
          <Box
            sx={{
              backgroundColor: "red",
              margin: "auto",
              height: "3px",
              width: "100px",
            }}
          ></Box>
        </Box>
        <Box marginTop="20px" padding={5}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar sx={{ width: "100px", height: "100px" }} src={team1} />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Irani Borah
                </Typography>
                <Typography variant="p" sx={{ textAlign: "center" }}>
                  Director and CEO
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar sx={{ width: "100px", height: "100px" }} src={team2} />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Saurav Sarma
                </Typography>
                <Typography variant="p" sx={{ textAlign: "center" }}>
                  Buisness Development Manager
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar sx={{ width: "100px", height: "100px" }} src={team3} />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Vikash Chandra Mishra
                </Typography>
                <Typography variant="p" sx={{ textAlign: "center" }}>
                  Lead Backend Developer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar sx={{ width: "100px", height: "100px" }} src={team4} />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Arijeet Kumar Das
                </Typography>
                <Typography variant="p" sx={{ textAlign: "center" }}>
                  Lead Frontend Developer
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Robot Theme */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "20px",
        }}
      >
        Coming Soon!
      </Typography>
      <Box
        sx={{
          backgroundColor: "red",
          margin: "auto",
          height: "3px",
          width: "100px",
        }}
      ></Box>
      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        justifyContent="space-around"
        alignItems="center"
        marginTop="50px"
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{ alignItems: { xs: "center", md: "start" } }}
          flexDirection="column"
          width="50%"
          gap={4}
        >
          <Typography
            variant="h5"
            sx={{ color: "red", textAlign: { xs: "center", md: "start" } }}
          >
            Experience the Future with our 'Robot Themed Events'
          </Typography>
          <Typography
            variant="p"
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            Immerse yourself in a futuristic world filled with robots,
            technology, and interactive experiences at our Robot Themed Events.
            With a range of activities and attractions, it's an event not to be
            missed!
          </Typography>
          <Link to="/robot">
            <Button variant="contained" color="error">
              Know More
            </Button>
          </Link>
        </Box>
        <Box sx={{ height: "250px", width: "400px" }}>
          <img src={robotImg} alt="" height="100%" width="100%" />
        </Box>
      </Box>

      <Divider sx={{ marginTop: "20px" }} />
      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        justifyContent="space-around"
        alignItems="center"
        marginTop="20px"
      >
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            alignItems: { xs: "center", md: "start" },
            order: { xs: -1, md: 1 },
          }}
          flexDirection="column"
          width="50%"
          gap={4}
        >
          <Typography
            variant="h5"
            sx={{ color: "red", textAlign: { xs: "center", md: "start" } }}
          >
            Make your proposal unforgettable with 'Propose on Wheels'
          </Typography>
          <Typography
            variant="p"
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            Take your love to new heights with a romantic long drive proposal
            that will leave you both breathless.
          </Typography>
          <Link to="/wheels">
            <Button variant="contained" color="error">
              Know More
            </Button>
          </Link>
        </Box>
        <Box sx={{ height: "250px", width: "400px" }} order={-1}>
          <img src={wheelsImg} alt="" height="100%" width="100%" />
        </Box>
      </Box>
      {/* Newsletter  */}
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop="20px"
        backgroundColor="#ECEFF5"
        height="200px"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="p">SUBSCRIBE</Typography>
          <Typography variant="h5" sx={{ color: "red" }}>
            Sign Up our Newsletter
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <TextField
            sx={{ background: "white" }}
            variant="outlined"
            placeholder="Enter your Email"
            InputProps={{
              disableUnderline: true,
              style: {
                height: "40px",
                maxWidth: "500px",
                borderRadius: "0",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "0px" }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
