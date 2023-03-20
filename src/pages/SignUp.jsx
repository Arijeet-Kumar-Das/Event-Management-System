import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Box
        height="85vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h5">Sign Up</Typography>

        <Box
          display="flex"
          flexDirection="column"
          marginTop="20px"
          sx={{ width: { xs: "350px", md: "400px" } }}
          gap={2}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            type="date"
            variant="outlined"
            label="Date Of Birth"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
          <Button sx={{ backgroundColor: "red", color: "white", p: "10px 0" }}>
            Sign Up
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          marginTop="20px"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography variant="p">
            Already a member? &nbsp;
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography variant="p" sx={{ color: "red" }}>
                Sign In
              </Typography>
            </Link>
            &nbsp; and get started now
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
