import { Box, Flex, Input, IconButton, Image, HStack, Text } from "@chakra-ui/react";
import Logo from "../../assets/Group 300.svg";

function Navbar() {
  return (
    <Box bg="rgba(0, 35, 69, 1)" color="white" w="100vw" position="fixed" top={0} px={8} py={10} zIndex={10}>
      <Flex align="center" maxW="2000px" mx="auto" w="100%" justifyContent="space-between">
        
        <HStack>
          <Image src={Logo} alt="Fluidtrol Logo" boxSize="50px" w="auto" />
        </HStack>

        {/* Centered Search bar */}
        <Flex align="center" bg="rgba(255, 255, 255, 0.5)" borderRadius="l3" px={4} py={1} maxW="400px" w="100%" mx={8}>
          <Input
            placeholder="Search product, model, sku, keywords..."
            _placeholder={{ color: "rgba(255, 255, 255, 0.7)" }}
            border="none"
            mr={2}
          />
          <IconButton
            icon={<Image src="../../assets/magnifier.png" alt="Search Icon" boxSize="16px"  />}
            aria-label="Search"
            bg="none"
            size="sm"
          />
        </Flex>

        {/* Icons aligned to the right */}
        <HStack spacing={6}>
          <Flex direction="column" align="center" >
            <IconButton
              icon={<Image src="../../assets/basket.png" alt="Cart Icon" boxSize="24px" />}
              aria-label="Cart"
              bg="none"
              _hover={{ bg: "transparent" }}
            />
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">cart</Text>
          </Flex>
          <Flex direction="column" align="center">
            <IconButton
              icon={<Image src="../../assets/user.png" alt="User Icon" boxSize="24px" />}
              aria-label="Login"
              bg="none"
              _hover={{ bg: "transparent" }}
            />
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">login</Text>
          </Flex>
          <Flex direction="column" align="center">
            <IconButton
              icon={<Image src="../../assets/plus.png" alt="Menu" boxSize="24p" />}
              aria-label="Menu"
              bg="none"
              _hover={{ bg: "transparent" }}
            />
            <Text fontSize="xs" fontWeight="bold" color="rgba(255, 255, 255, 0.7)">menu</Text>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
