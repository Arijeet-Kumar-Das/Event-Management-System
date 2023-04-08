import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import { object, ref, string, number } from "yup";

const BookingForm = () => {
  const validationScheme = object({
    name: string().required().label("Name"),
    email: string().email().required().label("email"),
    phoneNumber: number().required().label("Phone number"),
  });
  return (
    <div>
      <Box height="85vh">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            Confirm Your Booking!
          </Typography>
          <Box
            height="2px"
            width="250px"
            margin="auto"
            backgroundColor="red"
          ></Box>
          <Formik
            initialValues={{
              name: "",
              email: "",

              phoneNumber: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationScheme}
          >
            {({ handleChange, handleSubmit, errors, touched }) => (
              <Paper
                sx={{
                  p: 5,
                  margin: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="p" sx={{ color: "red", marign: "auto" }}>
                  Fill the following details
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Box
                    display="flex"
                    sx={{ flexDirection: { xs: "column", md: "row" } }}
                    gap={2}
                  >
                    <TextField
                      variant="outlined"
                      label="Name"
                      onChange={handleChange("name")}
                      error={Boolean(touched.name) && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                    <TextField
                      variant="outlined"
                      label="Phone No."
                      onChange={handleChange("phoneNumber")}
                      error={
                        Boolean(touched.phoneNumber) &&
                        Boolean(errors.phoneNumber)
                      }
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </Box>
                  <TextField
                    variant="outlined"
                    label="Email"
                    onChange={handleChange("email")}
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />{" "}
                  <Box
                    display="flex"
                    sx={{ flexDirection: { xs: "column", md: "row" } }}
                    gap={2}
                  >
                    <TextField variant="outlined" label="Price" />
                    <TextField
                      variant="outlined"
                      label="Reffered for booking by"
                    />
                  </Box>
                  <TextField
                    variant="outlined"
                    label="Past history of travelling"
                  />
                </Box>
                <Box
                  display="flex"
                  sx={{
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 5 },
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleSubmit}
                  >
                    Pay Online
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleSubmit}
                  >
                    Pay Offline
                  </Button>
                </Box>
              </Paper>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
};

export default BookingForm;
