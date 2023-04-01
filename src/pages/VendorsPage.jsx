import { Box, Grid, Typography, Paper, IconButton, Chip } from "@mui/material";
import React from "react";
import Vendor1 from "../Images/vendor1.jpg";
import Vendor2 from "../Images/vendor2.jpg";
import Vendor3 from "../Images/vendor3.jpg";
import Vendor4 from "../Images/vendor4.jpg";
import Vendor5 from "../Images/vendor5.jpg";
import Vendor6 from "../Images/vendor6.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";

const VendorsPage = () => {
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
      <Typography variant="h6">Photographers in Guwahati</Typography>
      <Box
        sx={{
          backgroundColor: "red",

          height: "3px",
          width: "100px",
        }}
      ></Box>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        <Grid item md={4} sm={6} xs={12}>
          <Link to="/vendor" style={{ textDecoration: "none" }}>
            <Paper
              sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <img
                src={Vendor1}
                alt="venue image"
                width="100%"
                height="200px"
              />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Taj Wedding Films</Typography>
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

              <Typography variant="p" sx={{ color: "grey", fontSize: "12px" }}>
                Photo + Video
              </Typography>
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
                  <Chip label="Potraits" size="small" />
                  <Chip label="lifestyle" size="small" />
                </Box>
              </Box>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Vendor2} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Video Tailor</Typography>
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

            <Typography variant="p" sx={{ color: "grey", fontSize: "12px" }}>
              Photo + Video
            </Typography>
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
                <Chip label="Potraits" size="small" />
                <Chip label="lifestyle" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Vendor3} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Raj Studios</Typography>
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

            <Typography variant="p" sx={{ color: "grey", fontSize: "12px" }}>
              Photo + Video
            </Typography>
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
                <Chip label="Potraits" size="small" />
                <Chip label="lifestyle" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Vendor4} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Tushar Batra Films</Typography>
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

            <Typography variant="p" sx={{ color: "grey", fontSize: "12px" }}>
              Photo + Video
            </Typography>
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
                <Chip label="Potraits" size="small" />
                <Chip label="lifestyle" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Vendor5} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Mohit Arora Productions</Typography>
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

            <Typography variant="p" sx={{ color: "grey", fontSize: "12px" }}>
              Photo + Video
            </Typography>
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
                <Chip label="Potraits" size="small" />
                <Chip label="lifestyle" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper
            sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <img src={Vendor6} alt="venue image" width="100%" height="200px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Wedscoop</Typography>
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

            <Typography variant="p" sx={{ color: "grey", fontSize: "12px" }}>
              Photo + Video
            </Typography>
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
                <Chip label="Potraits" size="small" />
                <Chip label="lifestyle" size="small" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default VendorsPage;
