import { Box, Flex, Input, IconButton, Image, HStack, Text } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import Logo from "../../assets/Group 300.svg";
import plus from '../../assets/plus.png';
import login from '../../assets/user.png';
import cart from '../../assets/cart.png';

function Navbar() {
  return (
    <Box bg="rgba(0, 35, 69, 1)" color="white" w="100vw" position="fixed" top={0} px={8} py={10} zIndex={10} >
      <Flex
        align="center"
        maxW="2000px"
        mx="auto"
        w="100%"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }} // Stack for small screens
      >
        {/* Logo and Icons on one row */}
        <HStack
          w="full"
          justify="space-between"
          mb={{ base: 4, md: 0}} // Add margin bottom for small screens
        >
          <Image src={Logo} alt="Fluidtrol Logo" boxSize="50px" w="auto" />

          {/* Icons on the same line as logo/based on design/ */}
          <HStack spacing={6} display={{ base: "flex", md: "none" }}>
            <Flex direction="column" align="center" mr="-5px">
              <IconButton
                bg="none"
                mb="-5px"
                _hover={{ filter: "brightness(0) invert(1)" }}
                transition="0.3s"
              >
                <Image src={cart} alt="Cart" boxSize="40px" />
              </IconButton>
              <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">
                cart
              </Text>
            </Flex>
            <Flex direction="column" align="center" mr="-5px">
              <IconButton
                bg="none"
                mb="-5px"
                _hover={{ filter: "brightness(0) invert(1)" }}
                transition="0.3s"
              >
                <Image src={login} alt="Login" boxSize="40px" />
              </IconButton>
              <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">
                login
              </Text>
            </Flex>
            <Flex direction="column" align="center">
              <IconButton
                bg="none"
                mb="-5px"
                _hover={{ filter: "brightness(0) invert(1)" }}
                transition="0.3s"
              >
                <Image src={plus} alt="Menu" boxSize="30px" />
              </IconButton>
              <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">
                menu
              </Text>
            </Flex>
          </HStack>
        </HStack>

        <Flex
          align="center"
          bg="rgba(255, 255, 255, 0.5)"
          borderRadius="md"
          px={3}
          py={1}
          maxW="500px"
          w="100%" // Full width for small screens
          mx={{ base: "auto", md: 8 }} // Centered for small screens
          mt={{ base: -2, md: 0 }}
        >
          <Input
            placeholder="Search product, model, sku, keywords..."
            _placeholder={{ color: "rgba(255, 255, 255, 0.7)" }}
            border="none"
            mr={2}
            w="100%"
          />
          <IconButton bg="none" color="white">
            <LuSearch />
          </IconButton>
        </Flex>

        {/* Icons aligned to the right */}
        <HStack spacing={6} pr="50px" display={{ base: "none", md: "flex" }}>
          <Flex direction="column" align="center" mr="25px">
            <IconButton
              bg="none"
              mb="-5px"
              _hover={{ filter: "brightness(0) invert(1)" }}
              transition="0.3s"
            >
              <Image src={cart} alt="Cart" boxSize="50px" />
            </IconButton>
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">
              cart
            </Text>
          </Flex>
          <Flex direction="column" align="center" mr="25px">
            <IconButton
              bg="none"
              mb="-5px"
              _hover={{ filter: "brightness(0) invert(1)" }}
              transition="0.3s"
            >
              <Image src={login} alt="Login" boxSize="40px" />
            </IconButton>
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">
              login
            </Text>
          </Flex>
          <Flex direction="column" align="center">
            <IconButton
              bg="none"
              mb="-5px"
              _hover={{ filter: "brightness(0) invert(1)" }}
              transition="0.3s"
            >
              <Image src={plus} alt="Menu" boxSize="30px" />
            </IconButton>
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">
              menu
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
