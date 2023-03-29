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
          <Typography
            variant="h3"
            sx={{
              fontStyle: "italic",
              color: "#fdb44b",
              fontFamily: "fasthand",
            }}
          >
            Enjoy
          </Typography>
          <Typography variant="h2" sx={{ color: "#fdb44b" }}>
            ACHURJYA
          </Typography>
          <Box
            sx={{ height: "3px", backgroundColor: "#fdb44b", width: "350px" }}
          ></Box>
          <Typography variant="h2" sx={{ color: "#fdb44b" }}>
            BORPATRA
          </Typography>
        </Box>
        <img
          src={SingerImage2}
          alt=""
          width="280px"
          height="300px"
          style={{ borderRadius: "50%" }}
        />
        <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
          <Typography variant="h2" sx={{ color: "#fdb44b" }}>
            BOHAGI
          </Typography>
          <Typography variant="p" sx={{ color: "white" }}>
            On 8th April
          </Typography>
          <Typography variant="p" sx={{ color: "white" }}>
            At
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Indian Institute of Infomation Technology
          </Typography>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Guwahati
          </Typography>
          <Typography variant="h6" sx={{ color: "red", fontWeight: "bold" }}>
            Organised by Cultural Board
          </Typography>
          ,
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
