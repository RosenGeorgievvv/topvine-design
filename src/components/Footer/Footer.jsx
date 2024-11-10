import { Box, Flex, HStack, Text, Image, VStack } from "@chakra-ui/react";
import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter2.svg";
import facebookIcon from "../../assets/facebook2.svg";

function Footer() {
  return (
    <Box bg="rgba(0, 35, 69, 1)" color="white" w="auto" py={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1600px"
        mx="auto"
        px={4}
        wrap="wrap"
        textAlign={{ base: "center", md: "left" }}
      >

        <VStack 
          spacing={1} 
          order={{ base: 1, md: 2 }} 
          mb={{ base: 4, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight="bold"
            color="rgba(255, 255, 255, 0.7)"
          >
            For Customer Service Call
          </Text>
          <Text fontSize={{ base: "32px", md: "48px" }} fontWeight="bold">
            888-551-0511
          </Text>
          <Text fontSize={{ base: "14px", md: "18px" }} color="rgba(255, 255, 255, 1)">
            or send an email to: fpt@fluidtrol.com
          </Text>
        </VStack>

        <HStack 
          spacing={4} 
          order={{ base: 2, md: 3 }} 
          mb={{ base: 4, md: 0 }}
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Box margin="3">
            <Image src={linkedinIcon} alt="LinkedIn Icon" boxSize={{ base: "24px", md: "32px" }} />
          </Box>
          <Box margin="3">
            <Image src={twitterIcon} alt="Twitter Icon" boxSize={{ base: "24px", md: "32px" }} />
          </Box>
          <Box margin="3">
            <Image src={facebookIcon} alt="Facebook Icon" boxSize={{ base: "24px", md: "32px" }} />
          </Box>
        </HStack>

        <VStack 
          align={{ base: "center", md: "flex-start" }} 
          color="rgba(255, 255, 255, 0.7)" 
          order={{ base: 3, md: 1 }}
        >
          <Text fontSize={{ base: "10px", md: "12px" }}>
            © 2024 Fluidtrol Process Technologies, Inc.
          </Text>
          <Text fontSize={{ base: "10px", md: "12px" }}>All Rights Reserved</Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;
