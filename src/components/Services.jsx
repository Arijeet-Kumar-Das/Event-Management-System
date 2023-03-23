import React from "react";
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
const Services = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Charges</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                Foods
              </TableCell>
              <TableCell align="center">Eatables</TableCell>
              <TableCell align="center">100</TableCell>
              <TableCell align="center">Food.jpg</TableCell>
              <TableCell align="center">
                <Box>
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
                Foods
              </TableCell>
              <TableCell align="center">Eatables</TableCell>
              <TableCell align="center">100</TableCell>
              <TableCell align="center">Food.jpg</TableCell>
              <TableCell align="center">
                <Box>
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
                Foods
              </TableCell>
              <TableCell align="center">Eatables</TableCell>
              <TableCell align="center">100</TableCell>
              <TableCell align="center">Food.jpg</TableCell>
              <TableCell align="center">
                <Box>
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
                Foods
              </TableCell>
              <TableCell align="center">Eatables</TableCell>
              <TableCell align="center">100</TableCell>
              <TableCell align="center">Food.jpg</TableCell>
              <TableCell align="center">
                <Box>
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

export default Services;
