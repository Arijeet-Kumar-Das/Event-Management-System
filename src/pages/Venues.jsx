import { Box, Grid, Typography, Paper, IconButton, Chip } from "@mui/material";
import React from "react";
import Venue1 from "../Images/venue-1.jpg";
import Venue2 from "../Images/venue-2.jpg";
import Venue3 from "../Images/venue-3.jpg";
import Venue4 from "../Images/venue-4.jpg";
import Venue5 from "../Images/venue-5.jpg";
import Venue6 from "../Images/venue-6.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";

const Venues = () => {
  // truncation code
  //   // Set the maximum length of the text to be displayed
  //   const maxLength = 15;

  //   // Truncate the text if it is longer than maxLength
  //   const truncatedText =
  //     location.length > maxLength
  //       ? location.slice(0, maxLength - 3) + "..." // Add three dots at the end
  //       : location;

  return (
    <div style={{ padding: "20px" }}>
      {" "}
      <Typography variant="h6">Venues in Guwahati</Typography>
      <Box
        sx={{
          backgroundColor: "red",

          height: "3px",
          width: "100px",
        }}
      ></Box>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        <Grid item md={4} sm={6} xs={12}>
          <Link to="/venue" style={{ textDecoration: "none" }}>
            <Paper
              sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <img src={Venue1} alt="venue image" width="100%" height="200px" />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Maniram Dewan</Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <StarRateIcon sx={{ color: "gold", fontSize: "medium" }} />
                  <Typography variant="p">4.5</Typography>
                  <Typography variant="p" sx={{ color: "grey" }}>
                    (20 reviews)
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon sx={{ color: "grey", fontSize: "medium" }} />
                <Typography variant="p" sx={{ color: "grey" }}>
                  Betkuchi, NH 37,
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <CurrencyRupeeIcon />
                  <Typography variant="h6">1300/-</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Chip label="200 rooms" size="small" />
                  <Chip label="20-500 pax" size="small" />
                </Box>
              </Box>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Venue2} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Pragjyoti ITA Centre</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <StarRateIcon sx={{ color: "gold", fontSize: "medium" }} />
                <Typography variant="p">4.5</Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  (20 reviews)
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ color: "grey", fontSize: "medium" }} />
              <Typography variant="p" sx={{ color: "grey" }}>
                Machkhowa, Kedar Rd
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <CurrencyRupeeIcon />
                <Typography variant="h6">1300/-</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Chip label="200 rooms" size="small" />
                <Chip label="20-500 pax" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Venue3} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Guwahati Medical</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <StarRateIcon sx={{ color: "gold", fontSize: "medium" }} />
                <Typography variant="p">4.5</Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  (20 reviews)
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ color: "grey", fontSize: "medium" }} />
              <Typography variant="p" sx={{ color: "grey" }}>
                GMCH Rd, Bhangagarh,
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <CurrencyRupeeIcon />
                <Typography variant="h6">1300/-</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Chip label="200 rooms" size="small" />
                <Chip label="20-500 pax" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Venue4} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">NEDFi Convention Centre</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <StarRateIcon sx={{ color: "gold", fontSize: "medium" }} />
                <Typography variant="p">4.5</Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  (20 reviews)
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ color: "grey", fontSize: "medium" }} />
              <Typography variant="p" sx={{ color: "grey" }}>
                G.S. Road, Near Dona Planet,
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <CurrencyRupeeIcon />
                <Typography variant="h6">1300/-</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Chip label="200 rooms" size="small" />
                <Chip label="20-500 pax" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Venue5} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Assam Engineering</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <StarRateIcon sx={{ color: "gold", fontSize: "medium" }} />
                <Typography variant="p">4.5</Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  (20 reviews)
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ color: "grey", fontSize: "medium" }} />
              <Typography variant="p" sx={{ color: "grey" }}>
                Jalukbari, Guwahati,
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <CurrencyRupeeIcon />
                <Typography variant="h6">1300/-</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Chip label="200 rooms" size="small" />
                <Chip label="20-500 pax" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Venue6} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Shilpgram</Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <StarRateIcon sx={{ color: "gold", fontSize: "medium" }} />
                <Typography variant="p">4.5</Typography>
                <Typography variant="p" sx={{ color: "grey" }}>
                  (20 reviews)
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOnIcon sx={{ color: "grey", fontSize: "medium" }} />
              <Typography variant="p" sx={{ color: "grey" }}>
                NH 37, Panjabari,
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <CurrencyRupeeIcon />
                <Typography variant="h6">1300/-</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Chip label="200 rooms" size="small" />
                <Chip label="20-500 pax" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Venues;
