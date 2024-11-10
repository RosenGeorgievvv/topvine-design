import React from 'react';
import { Box, Heading, Button, Text, Image, Stack } from '@chakra-ui/react';
import itemOne from '../../assets/itemOne.png';
import itemTwo from '../../assets/itemTwo.png';
import itemThree from '../../assets/itemThree.png';

const Products = ({ title = 'Product Categories', showHeader = true }) => {
  return (
    <Box textAlign="center" p={6}>
      {showHeader && (
        <>
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "40px", lg: "48px" }}
            mb={4}
            p={{ base: "20px 10px", md: "30px 30px", lg: "50px 50px" }}
            color="rgba(0, 35, 69, 1)"
            fontWeight="bold"
          >
            Shop Fluidtrol
          </Heading>
          <Button
            color="white"
            mb={8}
            bg="rgba(82, 166, 215, 1)"
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            fontWeight="bold"
            width={{ base: "200px", md: "250px", lg: "300px" }}
            borderRadius="20px"
          >
            View All Products
          </Button>
        </>
      )}

      <Box
        bg="rgba(0, 35, 69, 1)"
        color="white"
        py={2}
        mx="auto"
        mb={6}
        textAlign="start"
        borderRadius="7px"
        w={{ base: "100%", md: "85%", lg: "80%", xl: "75%" }}
      >
        <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="bold" ml="20px">
          {title}
        </Text>
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        justifyContent="space-between"
        align="center"
        pb="5px"
        pt="40px"
        mx="auto"
        maxWidth={{ base: "100%", md: "80%", lg: "75%" }}
      >
        <Box textAlign="center" width={{ base: "100%", md: "300px" }} pb="10%">
          <Text fontWeight="bold" fontSize={{ base: "18px", md: "22px" }} color="rgba(0, 0, 0, 1)">
            Aquatic
          </Text>
          <Text color="rgba(0, 0, 0, 1)">Basket Strainers</Text>
          <Image src={itemOne} alt="Aquatic Basket Strainers" mb={4} mx="auto" />
          <Button
            mt={4}
            color="white"
            fontWeight="bold"
            fontSize={{ base: "14px", md: "16px" }}
            variant="solid"
            bg="rgba(82, 166, 215, 1)"
            borderRadius="22px"
            w={{ base: "200px", md: "300px" }}
          >
            View Aquatic Strainers
          </Button>
        </Box>

        <Box textAlign="center" width={{ base: "100%", md: "300px" }} pb="10%" >
          <Text fontWeight="bold" fontSize={{ base: "18px", md: "22px" }} color="rgba(0, 0, 0, 1)">
            General Water
          </Text>
          <Text color="rgba(0, 0, 0, 1)">Basket Strainers</Text>
          <Image src={itemTwo} alt="General Water Basket Strainers" mb={4} mx="auto" />
          <Button
            mt={4}
            variant="outline"
            fontSize={{ base: "14px", md: "16px" }}
            bg="white"
            color="rgba(82, 166, 215, 1)"
            border="1px solid rgba(82, 166, 215, 1)"
            borderRadius="22px"
            w={{ base: "200px", md: "300px" }}
            fontWeight="bold"
          >
            View Water Strainers
          </Button>
        </Box>

        <Box textAlign="center" width={{ base: "100%", md: "300px" }} pb="10%">
          <Text fontWeight="bold" fontSize={{ base: "18px", md: "22px" }} color="rgba(0, 0, 0, 1)">
            Industrial
          </Text>
          <Text color="rgba(0, 0, 0, 1)">Basket Strainers</Text>
          <Image src={itemThree} alt="Industrial Basket Strainers" mb={4} mx="auto" />
          <Button
            mt={4}
            variant="outline"
            fontSize={{ base: "14px", md: "16px" }}
            bg="white"
            color="rgba(82, 166, 215, 1)"
            border="1px solid rgba(82, 166, 215, 1)"
            borderRadius="22px"
            w={{ base: "200px", md: "300px" }}
            fontWeight="bold"
          >
            View Industrial Strainers
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Products;
