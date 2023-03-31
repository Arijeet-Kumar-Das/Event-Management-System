import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableCell,
  TableHead,
  tableCellClasses,
  TableRow,
  TableBody,
  Tooltip,
  Button,
  Modal,
  TextField,
} from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "red",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const Bookings = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  return (
    <div>
      <Box
        sx={{
          minWidth: { xs: "200px", md: "900px" },
          height: "500px",
          overflowX: "auto",
          overflowY: "auto",
          m: "20px 0",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Customer Name</StyledTableCell>
              <StyledTableCell align="center">
                Services Required
              </StyledTableCell>
              <StyledTableCell align="center">
                Package Requested
              </StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Billing Amount</StyledTableCell>
              <StyledTableCell align="center">Billing Balance</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Vix</TableCell>
              <TableCell align="center">Photography Makeup</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">Rs 16000</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon onClick={handleOpen1} sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Vix</TableCell>
              <TableCell align="center">Photography Makeup</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">Rs 16000</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon onClick={handleOpen1} sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Vix</TableCell>
              <TableCell align="center">Photography Makeup</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">Rs 16000</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon onClick={handleOpen1} sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Vix</TableCell>
              <TableCell align="center">Photography Makeup</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">Rs 16000</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon onClick={handleOpen1} sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Vix</TableCell>
              <TableCell align="center">Photography Makeup</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">Rs 16000</TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon onClick={handleOpen1} sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Button onClick={handleOpen} variant="contained" color="error">
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* Add Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                id="outlined-basic"
                label="Customer Name"
                variant="outlined"
              />
              <Button variant="contained" color="error">
                Add
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Update Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                id="outlined-basic"
                label="Customer Name"
                variant="outlined"
              />
              <Button variant="contained" color="error">
                Update
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Bookings;
