import { Box, Flex, Input, IconButton, Image, HStack, Text, VStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import Logo from "../../assets/Group 300.svg";
import plus from '../../assets/plus.png';
import closeIcon from '../../assets/close.png';
import login from '../../assets/user.png';
import cart from '../../assets/cart.png';
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Box bg="rgba(0, 35, 69, 1)" color="white" w="100vw" position="fixed" top={0} px={8} py={10} zIndex={10} >
        <Flex
          align="center"
          maxW="2000px"
          mx="auto"
          w="100%"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <HStack w="full" justify="space-between" mb={{ base: 4, md: 0 }}>
            <Image src={Logo} alt="Fluidtrol Logo" boxSize="50px" w="auto" />

            <HStack spacing={6} display={{ base: "flex", md: "none" }}>
              <Flex direction="column" align="center" mr="-5px">
                <IconButton bg="none" mb="-5px" _hover={{ filter: "brightness(0) invert(1)" }} transition="0.3s">
                  <Image src={cart} alt="Cart" boxSize="40px" />
                </IconButton>
                <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">cart</Text>
              </Flex>
              <Flex direction="column" align="center" mr="-5px">
                <IconButton bg="none" mb="-5px" _hover={{ filter: "brightness(0) invert(1)" }} transition="0.3s">
                  <Image src={login} alt="Login" boxSize="40px" />
                </IconButton>
                <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">login</Text>
              </Flex>
              <Flex direction="column" align="center">
                <IconButton
                  bg="none"
                  mb="-5px"
                  _hover={{ filter: "brightness(0) invert(1)" }}
                  transition="0.3s"
                  onClick={toggleMenu}
                ><Image src={isMenuOpen ? closeIcon : plus} alt="Menu" boxSize="30px" /></IconButton>
                <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">menu</Text>
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
            w="100%"
            mx={{ base: "auto", md: 8 }}
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

          <HStack spacing={6} pr="50px" display={{ base: "none", md: "flex" }}>
            <Flex direction="column" align="center" mr="25px">
              <IconButton bg="none" mb="-5px" _hover={{ filter: "brightness(0) invert(1)" }} transition="0.3s">
                <Image src={cart} alt="Cart" boxSize="50px" />
              </IconButton>
              <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">cart</Text>
            </Flex>
            <Flex direction="column" align="center" mr="25px">
              <IconButton bg="none" mb="-5px" _hover={{ filter: "brightness(0) invert(1)" }} transition="0.3s">
                <Image src={login} alt="Login" boxSize="40px" />
              </IconButton>
              <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">login</Text>
            </Flex>
            <Flex direction="column" align="center">
              <IconButton
                bg="none"
                mb="-5px"
                _hover={{ filter: "brightness(0) invert(1)" }}
                transition="0.3s"
                onClick={toggleMenu}
              >
                <Image src={isMenuOpen ? closeIcon : plus} alt="Menu" boxSize="30px" />
              </IconButton>
              <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">menu</Text>
            </Flex>
          </HStack>
        </Flex>
      </Box>

      <Box
        position="fixed"
        top="80px"
        left={0}
        w="100%"
        bg="gray.300"
        color="black"
        shadow="md"
        rounded="md"
        px={4}
        py={2}
        maxH={isMenuOpen ? "450px" : "0px"} 
        overflow="hidden"
        transition="max-height 0.3s ease-in-out"
        zIndex={9}
      >
        <Text fontSize="35px" fontWeight="bold" color="black" mb={4} pt={14} pl={340}>
          Menu
        </Text>

        {isMenuOpen && (
          <Flex justifyContent="space-between" maxW="1200px" mx="auto" wrap="wrap" pt={2}>
            <VStack align="start" p={2} minW="200px">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="blue.600"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Products
              </Text>
              <Text>Basket Strainers</Text>
              <Text>Commercial Reducers</Text>
              <Text>Modulating Float Valves</Text>
              <Text>Specialty Filters</Text>
              <Text>Sand Filters</Text>
              <Text>Spare Parts</Text>
            </VStack>

            <VStack align="start" p={2} minW="200px">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="blue.600"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Solutions
              </Text>
              <Text>Aquatic</Text>
              <Text>General Water</Text>
              <Text>Industrial</Text>
            </VStack>

            <VStack align="start" p={2} minW="200px">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="blue.600"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Design
              </Text>
              <Text>Strainer Basket Details</Text>
              <Text>Quality Control</Text>
              <Text>Our Design Process</Text>
              <Text>White Papers</Text>
            </VStack>

            <VStack align="start" p={2} minW="200px">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="blue.600"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Resources
              </Text>
              <Text>Blog</Text>
              <Text>About Us</Text>
              <Text>Job Openings</Text>
              <Text>Contact Us</Text>
              <Text>Privacy Policy</Text>
            </VStack>

            <VStack align="start" p={2} minW="200px">
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="blue.600"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Company
              </Text>
              <Text>About Fluidtrol</Text>
              <Text>Our Team</Text>
              <Text>Contact Information</Text>
              <Text>Locations</Text>
            </VStack>
          </Flex>
        )}
      </Box>

    </>
  );
}

export default Navbar;
