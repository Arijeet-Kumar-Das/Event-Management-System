import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { object, ref, string, number } from "yup";

const Login = () => {
  const navigate = useNavigate();
  const validationScheme = object({
    email: string().email().required().label("email"),
    password: string().required().label("Password"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={console.log("submit")}
        validationSchema={validationScheme}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (
          <Box
            height="85vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="h5">Sign In</Typography>
            <Box display="flex" gap={2} marginTop="20px">
              <IconButton
                sx={{
                  backgroundColor: "white",
                  color: "blue",
                  border: "0.3px solid #e6d8d8",
                  p: "12px 22px",
                  borderRadius: 0,
                }}
              >
                <GoogleIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#1877f2",
                  color: "white",
                  border: "0.3px solid #e6d8d8",
                  p: "12px 22px",
                  borderRadius: 0,
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "#31bf31",
                  color: "white",
                  border: "0.3px solid #e6d8d8",
                  p: "12px 22px",
                  borderRadius: 0,
                }}
              >
                <PhoneIcon />
              </IconButton>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              marginTop="20px"
              sx={{ width: { xs: "350px", md: "400px" } }}
              gap={2}
            >
              <Divider variant="middle">
                <Typography variant="p">or</Typography>
              </Divider>

              <TextField
                onChange={handleChange("email")}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                onChange={handleChange("password")}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                sx={{ backgroundColor: "red", color: "white", p: "10px 0" }}
                onClick={handleSubmit}
              >
                Sign In
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
              <Typography variant="p" sx={{ color: "red" }}>
                Forgot password?
              </Typography>
              <Typography variant="p">
                Not a member yet? &nbsp;
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Typography variant="p" sx={{ color: "red" }}>
                    Sign Up
                  </Typography>
                </Link>
                &nbsp; and get started now
              </Typography>
            </Box>
          </Box>
        )}
      </Formik>
    </div>
  );
};

export default Login;
