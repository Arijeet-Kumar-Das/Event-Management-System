import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../Images/category1.jpg";
import img2 from "../Images/category2.jpg";
import img3 from "../Images/category3.jpg";
import img4 from "../Images/category4.jpg";
import img5 from "../Images/category5.jpg";
import img6 from "../Images/category6.jpg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const UserInterest = () => {
  return (
    <div>
      <Box
        p="20px"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6">Select Your Interests</Typography>
            <Box
              sx={{
                backgroundColor: "red",

                height: "3px",
                width: "100px",
              }}
            ></Box>
          </Box>
          <Button variant="contained">Next</Button>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img2}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Sports"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img3}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Buisness"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img4}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Foods and Drink"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img5}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Festival"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img6}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Music"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                src={img1}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "100px" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Wedding"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserInterest;
