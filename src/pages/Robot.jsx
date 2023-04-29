import { Box } from "@mui/material";
import React from "react";

const Robot = () => {
  return (
    <div>
      <Box
        height="700px"
        sx={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/robot-background-image.jpg"
          })`,
          backgroundSize: "cover",
        }}
      ></Box>
    </div>
  );
};

export default Robot;
