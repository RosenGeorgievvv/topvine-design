import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import main from "../../assets/main.png";

const Main = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height="100vh"
      pt={{ base: "100px", md: "0" }} // Adds top padding on smaller screens to prevent overlap with header
    >
      <Image
        src={main}
        alt="Waterpark background"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        position="absolute"
        top={{ base: "25%", md: "15%" }} // 25% top for small screens and 15% for above
        left={{ base: "70%", lg: "60%", xl: "65%" }}
        color="white"
        maxWidth="600px"
        transform="translateX(-50%)"
        px={{ base: 4, md: 0 }}
      >
        <Text
          fontSize={{ base: "20px", md: "36px", lg: "48px" }} // Smaller font-size for mobile
          fontWeight="bold"
          color="rgba(0, 35, 69, 1)"
          lineHeight="1.2"
          width={{ base: "100%", md: "120%" }}
          textAlign="end"
        >
          The Aquatic Professionals <br /> Number One Choice
        </Text>
        <Text
          fontSize={{ base: "14px", md: "22px", lg: "28px" }} // Font size adjusted for better readability on small screen resolution
          fontWeight="normal"
          color="rgba(0, 35, 69, 0.7)"
          mt={2}
          width={{ base: "100%", md: "120%" }}
          textAlign="end"
        >
          For Strainers, Reducers & Float Valves
        </Text>
      </Box>
    </Box>
  );
};

export default Main;
