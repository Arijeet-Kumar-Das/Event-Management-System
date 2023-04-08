import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

const AddServices = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" p={5}>
        <Paper
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography variant="h6" sx={{ color: "red" }}>
            Enter below details to reach customers
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: { xs: "column", md: "row" }, gap: 3 }}
          >
            <TextField
              id="outlined-basic"
              label="Vendors Type"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="file"
              id="outlined-basic"
              variant="outlined"
              label="Upload Images(5)"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>

          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            fullWidth
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{ flexDirection: { xs: "column", md: "row" }, gap: 3 }}
          >
            <Box sx={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              id="outlined-basic"
              label="No. of people available"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Button variant="contained" color="error" fullWidth>
            Submit
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default AddServices;
