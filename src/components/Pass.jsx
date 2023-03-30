import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Circle1 from "../Images/circle1.png";
import Circle2 from "../Images/circle2.png";
import Circle3 from "../Images/circle3.PNG";
import SingerImg from "../Images/Singer2.jpeg";
const Pass = () => {
  return (
    <div>
      <Box
        height="87vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "620px",
            height: "280px",
          }}
        >
          <img src={SingerImg} alt="" width="40%" height="100%" />
          <Box p={3} width="60%" display="flex" flexDirection="column" gap={1}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              gap={3}
            >
              <img src={Circle1} alt="" width="25px" height="25px" />
              <img src={Circle2} alt="" width="25px" height="25px" />
              <img src={Circle3} alt="" width="25px" height="25px" />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Nunito", color: "red" }}
            >
              BOHAGI
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Nunito", color: "red" }}
            >
              BIHU EVENT IN IITG
            </Typography>

            <Typography variant="p" sx={{ fontFamily: "Nunito" }}>
              Singer: Achurjya Borpatra
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Nunito", fontWeight: "bold" }}
            >
              08.04.2023
            </Typography>
            <Typography variant="p" sx={{ fontFamily: "Nunito" }}>
              Time: 11:00 am onwards
            </Typography>
            <Typography variant="p" sx={{ fontFamily: "Nunito" }}>
              Pass: Free
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Pass;
