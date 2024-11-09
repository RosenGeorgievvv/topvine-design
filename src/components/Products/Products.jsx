import React from 'react';
import { Box, Heading, Button, Text, Image, Stack } from '@chakra-ui/react';
import itemOne from '../../assets/itemOne.png';
import itemTwo from '../../assets/itemTwo.png';
import itemThree from '../../assets/itemThree.png';

const Products = ({ title = 'Product Categories', showHeader = true}) => {
  return (
    <Box textAlign="center" p={6} >
       {showHeader && (
        <>
          <Heading as="h1" fontSize="48px" mb={4} p="50px 50px" color="rgba(0, 35, 69, 1)" justifyContent="center" fontWeight="bold">
            Shop Fluidtrol
          </Heading>
          <Button color="white" mb={8} bg="rgba(82, 166, 215, 1)" fontSize="18px" fontWeight="bold" width="300px" borderRadius="20px">
            View All Products
          </Button>
        </>
      )}

      <Box bg="rgba(0, 35, 69, 1)" color="white" py={2} mb={6} textAlign="start" borderRadius="7px">
        <Text fontSize="16px" fontWeight="bold" ml="20px">{title}</Text>
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={6}
        justify="center"
        align="center"
        pb="200px"
        pt="40px"
        
      >
        <Box textAlign="center" width="300px" mr="150px">
        <Text fontWeight="bold" fontSize="22px" color="rgba(0, 0, 0, 1)">Aquatic</Text>
        <Text color="rgba(0, 0, 0, 1)" >Basket Strainers</Text>
          <Image src={itemOne} alt="Aquatic Basket Strainers" mb={4} ml={3}/>
          <Button mt={4} color="white" fontWeight="bold" variant="solid" bg="rgba(82, 166, 215, 1)" borderRadius="22px" w="300px">
            View Aquatic Strainers
          </Button>
        </Box>

        <Box textAlign="center" width="300px" mr="150px">
        <Text fontWeight="bold" fontSize="22px" color="rgba(0, 0, 0, 1)">General Water</Text>
          <Text color="rgba(0, 0, 0, 1)">Basket Strainers</Text>
          <Image src={itemTwo} alt="General Water Basket Strainers" mb={4} />
          <Button mt={4} variant="outline" bg="white" color="rgba(82, 166, 215, 1)" border="1px solid rgba(82, 166, 215, 1)" borderRadius="22px" w="300px" fontWeight="bold">
            View Water Strainers
          </Button>
        </Box>

        <Box textAlign="center" width="300px">
        <Text fontWeight="bold" fontSize="22px" color="rgba(0, 0, 0, 1)">Industrial</Text>
          <Text color="rgba(0, 0, 0, 1)">Basket Strainers</Text>
          <Image src={itemThree} alt="Industrial Basket Strainers" mb={4} />
          <Button mt={4} variant="outline" bg="white" color="rgba(82, 166, 215, 1)" border="1px solid rgba(82, 166, 215, 1)" borderRadius="22px" w="300px" fontWeight="bold">
            View Industrial Strainers
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Products;
