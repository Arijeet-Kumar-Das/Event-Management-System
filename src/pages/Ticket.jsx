import {
  Box,
  Button,
  ButtonBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SingerImage from "../Images/Singer.jpeg";
import SingerImage2 from "../Images/Singer2.jpeg";
import Circle1 from "../Images/circle1.png";
import Circle2 from "../Images/circle2.png";
import Circle3 from "../Images/circle3.PNG";
import RangLogo from "../Images/rang logo.png";
import GplusLogo from "../Images/Gplus Logo-01.png";
import Aristalogo from "../Images/aristalogo file.png";
import NielitLogo from "../Images/NielitLogo.jpg";
import Logo from "../Images/LOGO.png";

const Ticket = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        paddingTop="20px"
        gap={2}
        sx={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/bihu-background.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={{ gap: { xs: 2, md: 5 } }}
          p={2}
        >
          <img
            src={Circle1}
            alt=""
            style={{ maxHeight: "90px", maxWidth: "90px" }}
          />
          <img
            src={Circle2}
            alt=""
            // style={{ borderRadius: "50%" }}
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          />
          <img
            src={Circle3}
            alt=""
            // style={{ borderRadius: "50%" }}
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          />
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
          <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
            Indian Institute of Information Technology Guwahati
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography
              variant="h5"
              sx={{ fontStyle: "italic", color: "white", textAlign: "center" }}
            >
              CULTURAL BOARD AND
            </Typography>
            <img src={RangLogo} alt="" width="100px" height="50px" />
            <Typography
              variant="h5"
              sx={{ fontStyle: "italic", color: "white" }}
            >
              PRESENTS
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ fontWeight: "800", textShadow: "1px 1px 2px purple" }}
          >
            BOHAGI
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: { xs: "50%", md: "100%" },
              gap: { xs: 2, md: 5 },
              marginLeft: { xs: "0", md: "4.5rem" },
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography
                variant="p"
                sx={{
                  color: "blue",
                  fontWeight: "bold",
                  fontSize: { xs: "10px", md: "20px" },
                }}
              >
                POWERED BY
              </Typography>
              <img src={NielitLogo} alt="" width="70px" height="50px" />
            </Box>
            <img
              src={SingerImage2}
              alt=""
              style={{
                borderRadius: "50%",
                width: "180px",
                height: "180px",
              }}
            />
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  fontStyle: "italic",

                  fontSize: { xs: "5px", md: "20px" },
                }}
              >
                A celebration of Spring
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "blue",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: { xs: "10px", md: "20px" },
                }}
              >
                CO-PRESENTED BY
              </Typography>
              <img
                src={Aristalogo}
                alt=""
                width="45px"
                height="75px"
                style={{ backgroundColor: "white", borderRadius: "50px" }}
              />
            </Box>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#fdb44b",
              fontSize: { xs: "15px", md: "25px" },
            }}
          >
            Featured Artist
          </Typography>
          <Box display="flex" marginLeft="5.5rem">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h2"
                sx={{ color: "#fdb44b", fontSize: { xs: "30px", md: "50px" } }}
              >
                ACHURJYA
              </Typography>
              <Box
                sx={{
                  height: "3px",
                  backgroundColor: "#fdb44b",
                  width: { xs: "200px", md: "300px" },
                }}
              ></Box>
              <Typography
                variant="h2"
                sx={{ color: "#fdb44b", fontSize: { xs: "30px", md: "50px" } }}
              >
                BORPATRA
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontStyle: "italic", fontSize: "10px" }}
              >
                IN ASSOCIATION WITH
              </Typography>
              <img src={GplusLogo} alt="" width="50px" height="20px" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
          <Typography variant="p" sx={{ color: "#fdb44b" }}>
            On 8th April &nbsp; &nbsp; 4:30pm Onwards
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#fdb44b", fontWeight: "bold", textAlign: "center" }}
          >
            Free E-Passes available at
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#fdb44b", fontWeight: "bold" }}
          >
            https://eventboom.in/get-ticket
          </Typography>
        </Box>
        <Box display="flex" sx={{ gap: { xs: 5, md: 10 } }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <Typography
              variant="h5"
              sx={{ color: "white", fontStyle: "italic", fontSize: "10px" }}
            >
              {" "}
              EVENT PARTNER
            </Typography>
            <img
              src={Logo}
              alt=""
              width="200px"
              height="50px"
              style={{ padding: "10px", backgroundColor: "white" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        p={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={5}
      >
        <Box>
          <Typography variant="h5">Book E Pass for Event</Typography>
          <Box
            sx={{
              backgroundColor: "red",
              margin: "auto",
              height: "3px",
              width: "100px",
            }}
          ></Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          gap={5}
          width="100%"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              p: 5,
            }}
          >
            <Typography variant="p">Book E-Pass</Typography>

            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="No. of people visiting"
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" color="error" fullWidth>
              Submit
            </Button>
          </Paper>
          <Box
            sx={{
              width: "300px",
              borderWidth: "5px",
              borderStyle: "solid",
              borderColor: "red",
              borderRadius: "20px 0 20px 0",
              padding: "10px",
              margin: { xs: "auto", md: "0px" },
            }}
          >
            <img
              src={SingerImage}
              alt=""
              width="100%"
              height="450px"
              style={{ borderRadius: "20px 0 20px 0" }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Ticket;
