import React from 'react';
import { Box, Heading, Text, Image, Stack, Grid, Button } from '@chakra-ui/react';
import madeIn from '../../assets/madeIn.png';

const Info = () => {
  return (
    <Box p={8} textAlign="center" bg="rgba(245, 245, 245, 1)" pb={24} pt={20}>
      <Heading as="h2" fontSize="36px" mb={8} color="rgba(0, 0, 0, 1)" textAlign="left" ml="100px">
        Why Trust Fluidtrol?
      </Heading>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" justify="space-between">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={16} textAlign="left" ml="100px" maxW="700px">
          <Box>
            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">ISO 9001:2008 Certified</Text>
            <Text mb={4} color="rgba(0, 0, 0, 1)">Our quality system certification ensures the highest manufacturing standards.</Text>

            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">Expert Customization</Text>
            <Text mb={4} color="rgba(0, 0, 0, 1)">We work with your design engineers to meet your exact requirements.</Text>

            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">99% On-Time Delivery</Text>
            <Text mb={4} color="rgba(0, 0, 0, 1)">We consider timely delivery a crucial part of our service to our customers.</Text>

            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">Warehousing</Text>
            <Text color="rgba(0, 0, 0, 1)">Inventory is managed on-site to reduce lead times and keep costs low.</Text>
          </Box>
          
          <Box>
            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">Material Selection</Text>
            <Text mb={4} color="rgba(0, 0, 0, 1)">We use the highest quality PVC, CPVC, PP, PVDF, FRP, and Stainless Steels.</Text>

            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">We Test Everything</Text>
            <Text mb={4} color="rgba(0, 0, 0, 1)">Every basket and Wye strainer is hydro tested before leaving our facility.</Text>

            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">Long-Life Span</Text>
            <Text mb={4} color="rgba(0, 0, 0, 1)">We’ve been manufacturing innovative non-metallic strainers for over 20 years.</Text>

            <Text fontWeight="bold" fontSize="16px" color="rgba(0, 0, 0, 1)">Wide Range of Sizes</Text>
            <Text color="rgba(0, 0, 0, 1)">There’s virtually no limit to our vertical and horizontal strainers sizes.</Text>
          </Box>
        </Grid>

        <Box display={{ base: 'none', md: 'block' }}>
          <Image src={madeIn} alt="Made in the USA" boxSize="300px" mr="200px" mt="50px" />
        </Box>
      </Stack>

      <Text fontSize="24px" fontWeight="bold" color="rgba(0, 35, 69, 1)" mt={10} mb={20}>
        The Very Best in Customer Service, Customization, and Delivery
      </Text>
      <Button bg="rgba(82, 166, 215, 1)" color="white" fontSize="16px" fontWeight="bold" px={8} py={4} borderRadius="20px" w="300px">
        Contact Us
      </Button>
    </Box>
  );
};

export default Info;
