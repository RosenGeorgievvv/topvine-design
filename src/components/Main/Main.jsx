import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import main from '../../assets/main.png'

const Main = () => {
  return (
    <Box position="relative" width="auto" height="auto">
      <Image
        src={main}
        alt="Waterpark background"
        objectFit="cover"
        width="100%"
        height="100%"
        margin="0"
      />
      <Box
        position="absolute"
        top="15%"
        left="50%"
        color="white"
        maxWidth="600px"
      >
        <Text
          fontSize="48px"
          fontWeight="bold"
          color="rgba(0, 35, 69, 1)"
          lineHeight="1.2"
          width="100%"
          textAlign="end"
        >
          The Aquatic Professionals <br /> Number One Choice
        </Text>
        <Text
          fontSize="28px"
          fontWeight="normal"
          color="rgba(0, 35, 69, 0.7)"
          mt={2}
          width="100%"
          textAlign="end"
        >
          For Strainers, Reducers & Float Valves
        </Text>
      </Box>
    </Box>
  );
};

export default Main;
