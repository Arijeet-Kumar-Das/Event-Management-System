import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Circle1 from "../Images/circle1.png";
import Circle2 from "../Images/circle2.png";
import Circle3 from "../Images/circle3.PNG";
import SingerImg from "../Images/Singer2.jpeg";
const Pass = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        margin="20px"
      >
        <Typography variant="h5">Download Your Pass</Typography>
        <Button variant="contained" color="error">
          DOWNLOAD
        </Button>
      </Box>
      <Box
        height="70vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 10,
            marginTop: "50px",
            padding: "20px 20px",
            maxWidth: "600px",
            p: { xs: 5, md: 3 },
          }}
        >
          <img
            src={SingerImg}
            alt=""
            width="200px"
            height="200px"
            style={{ borderRadius: "50%" }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <img src={Circle1} alt="" width="30px" height="30px" />
              <img src={Circle2} alt="" width="30px" height="30px" />
              <img src={Circle3} alt="" width="30px" height="30px" />
            </Box>
            <Typography variant="h6">BOHAGI</Typography>
            <Typography variant="h6">BIHU EVENT IN IITG</Typography>
            <Typography variant="p">Singer: Achurjya Borpatra</Typography>
            <Typography variant="p">08.04.2023</Typography>
            <Typography variant="p">Time: 11:00 am onwards</Typography>
            <Typography variant="p">Pass: Free</Typography>
            <Typography variant="p">IITG003</Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Pass;
