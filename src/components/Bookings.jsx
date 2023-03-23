import { Delete, DeleteForever, Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

const Bookings = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Customer Name</TableCell>
              <TableCell align="center">Services Requested</TableCell>
              <TableCell align="center">Package Required</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Billing Amount</TableCell>
              <TableCell align="center">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                Rasidul
              </TableCell>
              <TableCell align="center">Event</TableCell>
              <TableCell align="center">marraige</TableCell>
              <TableCell align="center">booked</TableCell>
              <TableCell align="center">20000</TableCell>
              <TableCell align="center">
                <Box display="flex">
                  <Edit
                    sx={{
                      marginRight: "10px",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  />
                  <DeleteForever
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                Rasidul
              </TableCell>
              <TableCell align="center">Event</TableCell>
              <TableCell align="center">marraige</TableCell>
              <TableCell align="center">booked</TableCell>
              <TableCell align="center">20000</TableCell>
              <TableCell align="center">
                <Box display="flex">
                  <Edit
                    sx={{
                      marginRight: "10px",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  />
                  <DeleteForever
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                Rasidul
              </TableCell>
              <TableCell align="center">Event</TableCell>
              <TableCell align="center">marraige</TableCell>
              <TableCell align="center">booked</TableCell>
              <TableCell align="center">20000</TableCell>
              <TableCell align="center">
                <Box display="flex">
                  <Edit
                    sx={{
                      marginRight: "10px",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  />
                  <DeleteForever
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                Rasidul
              </TableCell>
              <TableCell align="center">Event</TableCell>
              <TableCell align="center">marraige</TableCell>
              <TableCell align="center">booked</TableCell>
              <TableCell align="center">20000</TableCell>
              <TableCell align="center">
                <Box display="flex">
                  <Edit
                    sx={{
                      marginRight: "10px",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  />
                  <DeleteForever
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Bookings;
