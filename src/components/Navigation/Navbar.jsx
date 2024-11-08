import { Box, Flex, Input, IconButton, Spacer, Image, HStack } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/Group 300.svg";

function Navbar() {
  return (
    <Box bg="blue.900" color="white" w="100vw" position="fixed" top={0} px={6} py={6} zIndex={10}>
      <Flex align="center" maxW="100" mx="auto" w="100%">
        
        {/* Logo */}
        <HStack spacing={2}>
          <Image src={Logo} alt="Fluidtrol Logo" boxSize="40px" />
        </HStack>

        <Spacer />

        {/* Search bar */}
        <Flex align="center" bg="gray.600" borderRadius="md" px={2} py={1} maxW="400px" w="100%">
          <Input
            variant="unstyled"
            placeholder="Search product, model, sku, keywords..."
            _placeholder={{ color: "gray.300" }}
            color="white"
            mr={2}
          />
          <IconButton
            icon={<FiSearch />}
            aria-label="Search"
            colorScheme="gray"
            size="sm"
            variant="ghost"
          />
        </Flex>

        <Spacer />

        {/* Icons */}
        <HStack spacing={4}>
          <Flex direction="column" align="center">
            <IconButton
              icon={<FaShoppingCart />}
              aria-label="Cart"
              colorScheme="whiteAlpha"
              variant="ghost"
            />
            <Box fontSize="xs">cart</Box>
          </Flex>
          <Flex direction="column" align="center">
            <IconButton
              icon={<FaUser />}
              aria-label="Login"
              colorScheme="whiteAlpha"
              variant="ghost"
            />
            <Box fontSize="xs">login</Box>
          </Flex>
          <Flex direction="column" align="center">
            <IconButton
              icon={<FaBars />}
              aria-label="Menu"
              colorScheme="whiteAlpha"
              variant="ghost"
            />
            <Box fontSize="xs">menu</Box>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
