import { Box, Button, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Wheels = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div>
      {" "}
      <AnimatePresence>
        <Box
          height="600px"
          sx={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/travel-background-image.jpg"
            })`,
            backgroundSize: "cover",
            opacity: 0.8,
          }}
        >
          {isLoaded && (
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
            >
              <Box
                display="flex"
                alignItems="center"
                height="100%"
                padding="100px 100px"
                flexDirection="column"
                gap={15}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  gap={2}
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {" "}
                    Make your proposal unforgettable with
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ fontWeight: "bold", color: "red" }}
                  >
                    {" "}
                    'Propose on Wheels'
                  </Typography>
                </Box>

                <Button variant="contained" color="error">
                  Know More
                </Button>
              </Box>
            </motion.div>
          )}
        </Box>
      </AnimatePresence>
    </div>
  );
};

//  <Typography variant="h6" sx={{ textAlign: "center" }}>
//    Whether you're planning a scenic drive through the countryside or a romantic
//    night out on the town, Propose on Wheels has got you covered. With a variety
//    of vehicles to choose from and customizable packages to suit your needs, you
//    can create a proposal that's as unique as your love story.
//  </Typography>;
export default Wheels;
