import React from 'react';
import { Box, Heading, Text, Image, Stack, Grid, Button } from '@chakra-ui/react';
import madeIn from '../../assets/madeIn.png';

const Info = () => {
  return (
    <Box p={{ base: 4, md: 8 }} textAlign="center" bg="rgba(245, 245, 245, 1)" pb={{ base: 12, md: 24 }} pt={{ base: 10, md: 20 }}>
      <Heading
        as="h2"
        fontSize={{ base: "24px", md: "36px" }}
        mb={{ base: 4, md: 8 }}
        color="rgba(0, 0, 0, 1)"
        textAlign={{ base: "center", md: "left" }}
        ml={{ base: 0, md: "100px" }}
      >
        Why Trust Fluidtrol?
      </Heading>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={8}
        align="center"
        justify="space-between"
        textAlign="left"
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={8}
          ml={{ base: 0, md: "50px", lg: "100px" }}
          maxW={{ base: "100%", md: "700px" }}
          textAlign={{ base: "center", md: "left" }}
        >
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

        
        <Box
          display={{ base: 'block' }}
          mt={{ base: 8, md: 0 }}
          order={{ base: 1, md: 2, lg: 1 }}
          mr={{ base: 0, lg: "50px", xl: "200px" }}
        >
          <Image
            src={madeIn}
            alt="Made in the USA"
            boxSize={{ base: "200px", md: "250px", lg: "300px" }}
            mx="auto"
          />
        </Box>
      </Stack>

      <Text
        fontSize={{ base: "18px", md: "24px" }}
        fontWeight="bold"
        color="rgba(0, 35, 69, 1)"
        mt={10}
        mb={12}
      >
        The Very Best in Customer Service, Customization, and Delivery
      </Text>

      <Button
        bg="rgba(82, 166, 215, 1)"
        color="white"
        fontSize={{ base: "14px", md: "16px" }}
        fontWeight="bold"
        px={8}
        py={4}
        borderRadius="20px"
        w={{ base: "250px", md: "300px" }}
        mt={{ base: 4, lg: 0 }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Info;
