import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import circle1 from "../Images/circle1.png";
import circle2 from "../Images/circle2.png";
import circle3 from "../Images/circle3.PNG";
import RangLogo from "../Images/rang logo.png";
import SingerImage from "../Images/Singer2.jpeg";
import AristaLogo from "../Images/aristalogo file.png";
import NeilitLogo from "../Images/NielitLogo.jpg";
import GplusLogo from "../Images/Gplus Logo-01.png";
import Logo from "../Images/LOGO.png";
import Jaapi from "../Images/jaapi-image.jpg";
import { Height } from "@mui/icons-material";
import Pragnews from "../Images/PRAG NEWS LOGO.png";
const Pass = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          display="flex"
          marginTop="20px"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 10 },
          }}
        >
          <Typography variant="h5" sx={{ fontSize: { xs: "20px" } }}>
            Download Your Pass Now!
          </Typography>
          <Button variant="contained" color="error">
            DOWNLOAD
          </Button>
        </Box>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "400px",
            marginTop: "20px",
            p: 2,
            maxHeight: "800px",
            overflow: "hidden",
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pass-background.jpg"
            })`,
            backgroundSize: "cover",
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src={circle1}
              alt=""
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            />
            <img
              src={circle2}
              alt=""
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            />
            <img
              src={circle3}
              alt=""
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            />
          </Box>
          <Typography variant="p" sx={{ fontWeight: "550", fontSize: "12px" }}>
            Indian Institute of Information Technology Guwahati
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="p"
              sx={{ fontStyle: "italic", fontWeight: "550", fontSize: "13px" }}
            >
              CULTURAL BOARD AND{" "}
            </Typography>
            <img src={RangLogo} alt="" width="70px" height="50px" />
            <Typography
              variant="p"
              sx={{ fontStyle: "italic", fontWeight: "550", fontSize: "13px" }}
            >
              PRESENTS
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textShadow: "1px 1px 2px purple" }}
          >
            BOHAGI
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Box display="flex" flexDirection="column" maxWidth="100px">
              <Typography variant="p" sx={{ fontSize: "8px" }}>
                POWERED BY
              </Typography>
              <img src={NeilitLogo} alt="" width="70px" height="60px" />
            </Box>
            <img
              src={SingerImage}
              alt=""
              width="180px"
              height="180px"
              style={{ borderRadius: "50%" }}
            />
            <Box display="flex" flexDirection="column" maxWidth="65px" gap={1}>
              <Typography variant="p" sx={{ fontSize: "8px" }}>
                CO-PRESENTED BY
              </Typography>
              <img
                src={AristaLogo}
                alt=""
                width="50px"
                height="75px"
                style={{ borderRadius: "50px" }}
              />
            </Box>
          </Box>
          <Divider />


          <Box display="flex" alignItems="center" gap={1}>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="p"
                sx={{ fontSize: "5px", textAlign: "center" }}
              >
                EXCLUSIVE MEDIA PARTNER
              </Typography>
              <img src={Pragnews} alt="" width="75px" height="30px" />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignitems="center"
            >
              <Typography
                variant="p"
                sx={{ fontSize: "13px", textAlign: "center" }}
              >
                FEATURED ARTIST
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "red", fontStyle: "italic", fontWeight: "bold" }}
              >
                ACHURJYA BORPATRA
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column">
              <Typography
                variant="p"
                sx={{ fontSize: "5px", textAlign: "center" }}
              >
                IN ASSOCIATION WITH
              </Typography>
              <img src={GplusLogo} alt="" width="75px" height="30px" />
            </Box>
          </Box>


          
          <Typography variant="p">Date: 08.04.2023</Typography>
          <Typography variant="p">Time: 11 am onwards</Typography>
          <Typography variant="p">Pass: free</Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="p">Serial Number: </Typography>
            <Typography variant="p" sx={{ fontWeight: "550", color: "red" }}>
              IITG003{" "}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
            gap={1}
          >
            <Typography variant="p" sx={{ fontSize: "10px" }}>
              EVENT PARTNER
            </Typography>
            <img src={Logo} alt="" width="100px" height="15px" />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Pass;
