import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
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
import event1 from "../Images/event-1.jpg";
import event2 from "../Images/event-2.jpg";
import event3 from "../Images/event-3.jpg";
const Home = () => {
  const PaperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
  };
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
            }}
          >
            Connecting the World
            <Typography variant="h6">Plan Your Next Event</Typography>
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
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={PaperStyle}>
              <IconButton sx={{ color: "red" }}>
                <ApartmentIcon sx={{ height: "70px", width: "70px" }} />
              </IconButton>
              <Typography variant="p">Buisness</Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                2 events
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={PaperStyle}>
              <IconButton sx={{ color: "red" }}>
                <MusicNoteIcon sx={{ height: "70px", width: "70px" }} />
              </IconButton>
              <Typography variant="p">Music</Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                1 events
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={PaperStyle}>
              <IconButton sx={{ color: "red" }}>
                <FastfoodIcon sx={{ height: "70px", width: "70px" }} />
              </IconButton>
              <Typography variant="p">Food and Drink</Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                3 events
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={PaperStyle}>
              <IconButton sx={{ color: "red" }}>
                <FestivalIcon sx={{ height: "70px", width: "70px" }} />
              </IconButton>
              <Typography variant="p">Festival</Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                3 events
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={PaperStyle}>
              <IconButton sx={{ color: "red" }}>
                <SportsBasketballIcon sx={{ height: "70px", width: "70px" }} />
              </IconButton>
              <Typography variant="p">Sports</Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                3 events
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={PaperStyle}>
              <IconButton sx={{ color: "red" }}>
                <VideocamIcon sx={{ height: "70px", width: "70px" }} />
              </IconButton>
              <Typography variant="p">Conference</Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                3 events
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop="100px" backgroundColor="#e3dddd" padding="20px 50px">
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Upcoming Events
        </Typography>

        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          gap={5}
          justifyContent="center"
          alignItems="center"
          marginTop="20px"
        >
          <Card sx={{ maxWidth: 300, maxheight: 400 }}>
            <CardMedia
              sx={{ height: 160 }}
              image={event1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cycling Competition
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur reiciendis molestiae Lorem ipsum dolor sit amet,
                consectetur
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                size="small"
                sx={{ backgroundColor: "red", color: "white" }}
              >
                Book Tickets
              </Button>
              <Button size="small">Price : $12</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300, maxheight: 400 }}>
            <CardMedia
              sx={{ height: 160 }}
              image={event2}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Singing Competition
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur reiciendis molestiae Lorem ipsum dolor sit amet,
                consectetur
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                size="small"
                sx={{ backgroundColor: "red", color: "white" }}
              >
                Book Tickets
              </Button>
              <Button size="small">Price : $18</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300, maxheight: 400 }}>
            <CardMedia
              sx={{ height: 160 }}
              image={event3}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lifestyle Expo 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur reiciendis molestiae Lorem ipsum dolor sit amet,
                consectetur
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                size="small"
                sx={{ backgroundColor: "red", color: "white" }}
              >
                Book Tickets
              </Button>
              <Button size="small">Price : $15</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
