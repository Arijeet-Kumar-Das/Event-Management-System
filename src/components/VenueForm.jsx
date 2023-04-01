import React from "react";
import VenueImage from "../Images/venue-1.jpg";
import { Box, Paper, TextField, Typography } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const VenueForm = () => {
  return (
    <div>
      <Box
        sx={{
          borderRadius: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          p: 5,
        }}
      >
        <Typography variant="h5" sx={{ color: "red", fontWeight: "550" }}>
          Hi, this is Maniram Dewan Trade Center
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          type="date"
          label="Date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="No. of People"
          variant="outlined"
          fullWidth
        />
        <FormControl fullWidth>
          <FormLabel id="demo-row-radio-buttons-group-label">Time</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Evening"
            />
            <FormControlLabel value="male" control={<Radio />} label="Day" />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default VenueForm;
