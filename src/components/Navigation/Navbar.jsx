import { Box, Flex, Input, IconButton, Image, HStack, Text, Icon } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu"
import Logo from "../../assets/Group 300.svg";
import plus from '../../assets/plus.png';
import login from '../../assets/user.png';
import cart from '../../assets/cart.png';

function Navbar() {
  return (
    <Box bg="rgba(0, 35, 69, 1)" color="white" w="100vw" position="fixed" top={0} px={8} py={10} zIndex={10}>
      <Flex align="center" maxW="2000px" mx="auto" w="100%" justifyContent="space-between">
        
        <HStack>
          <Image src={Logo} alt="Fluidtrol Logo" boxSize="50px" w="auto" />
        </HStack>

        {/* Centered Search bar */}
        <Flex align="center" bg="rgba(255, 255, 255, 0.5)" borderRadius="l3" px={3} py={1} maxW="400px" w="100%" mx={8}>
          <Input
            placeholder="Search product, model, sku, keywords..."
            _placeholder={{ color: "rgba(255, 255, 255, 0.7)" }}
            border="none"
            mr={2}
          />
          <IconButton bg="none" color='white'>
            <LuSearch />
          </IconButton>
        </Flex>

        {/* Icons aligned to the right */}
        <HStack spacing={6}>
          <Flex direction="column" align="center" mr="25px" >
            <IconButton bg="none">
              <Image src={cart} alt="Cart" boxSize="35px" />
            </IconButton>
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">cart</Text>
          </Flex>
          <Flex direction="column" align="center" mr="25px">
            <IconButton bg="none" >
              <Image src={login} alt="Menu" boxSize="32px" />
              </IconButton>
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">login</Text>
          </Flex>
          <Flex direction="column" align="center">
            <IconButton bg="none">
              <Image src={plus} alt="User Icon" boxSize="22px" />
            </IconButton>
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">menu</Text>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
