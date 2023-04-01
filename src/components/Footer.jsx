import { Divider, Box, Typography } from "@mui/material";
import Logo from "../Images/LOGO.png";

import React from "react";

const Footer = () => {
  return (
    <div>
      <Box>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            p: { xs: 2, md: "50px 100px" },
            gap: { xs: 2, md: 20 },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="50%"
            gap={2}
          >
            <img src={Logo} alt="" height="22px" width="150px" />
            <Typography
              variant="p"
              sx={{
                fontFamily: "Source Sans Pro",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              error modi placeat alias totam reprehenderit, recusandae deleniti
              dolorem, maxime doloremque natus, hic veniam ex voluptatibus
              quisquam fugiat! Asperiores debitis, accusamus omnis minima ab id
              cupiditate sequi dignissimos, ipsa, facere veritatis?
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            sx={{ alignItems: { xs: "center", md: "flex-start" } }}
            flexDirection="column"
            gap={3}
          >
            <Typography variant="h6">Navigation</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: { xs: "row", md: "column" },
              }}
            >
              <Typography
                variant="p"
                sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
              >
                Home
              </Typography>
              <Typography
                variant="p"
                sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
              >
                Vendors
              </Typography>
              <Typography
                variant="p"
                sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
              >
                Venues
              </Typography>
              <Typography
                variant="p"
                sx={{ "&:hover": { color: "green" }, cursor: "pointer" }}
              >
                Packages
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography variant="p">
            Copyright &copy;All rights reserved
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
