import { Box, Flex, HStack, Text, Image, VStack } from "@chakra-ui/react";
import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter2.svg";
import facebookIcon from "../../assets/facebook2.svg";

function Footer() {
  return (
    <Box bg="rgba(0, 35, 69, 1)" color="white" w="auto" py={8}>
      <Flex
        align="center"
        justify="space-between"
        maxW="1600px"
        mx="auto"
        px={1}
        wrap="wrap"
      >
        {/*Left Side*/}

        <VStack align="flex-start" color="rgba(255, 255, 255, 0.7)">
          <Text fontSize="12px">
            © 2024 Fluidtrol Process Technologies, Inc.
          </Text>
          <Text fontSize="12px">All Rights Reserved</Text>
        </VStack>

        {/* Center Details */}
        <VStack textAlign="center" spacing={1}>
          <Text
            fontSize="24px"
            fontWeight="bold"
            color="rgba(255, 255, 255, 0.7)"
          >
            For Customer Service Call
          </Text>
          <Text fontSize="48px" fontWeight="bold">
            888-551-0511
          </Text>
          <Text fontSize="18px" color="rgba(255, 255, 255, 1)">
            or send an email to: fpt@fluidtrol.com
          </Text>
        </VStack>

        {/* Right Side */}
        <HStack spacing={4}>
          <Box margin="3">
            <Image src={linkedinIcon} alt="LinkedIn Icon" boxSize="32px" />
          </Box>
          <Box margin="3">
            <Image src={twitterIcon} alt="Twitter Icon" boxSize="32px" />
          </Box>
          <Box margin="3">
            <Image src={facebookIcon} alt="Facebook Icon" boxSize="32px" />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
