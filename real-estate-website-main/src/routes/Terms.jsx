import { VStack, Heading, Text, Box, Divider, useColorModeValue } from '@chakra-ui/react';

const Terms = () => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <VStack my='8' spacing='6' align='stretch'>
      <Box textAlign='center'>
        <Heading size='xl'>Terms & Conditions</Heading>
        <Text fontSize='sm' color='gray.500' mt='2'>Last updated: August 2026</Text>
      </Box>

      <Box bg={cardBg} borderRadius='xl' boxShadow='md' p={{ base: '6', md: '10' }}>
        <VStack align='left' spacing='5'>
          <Box>
            <Heading size='sm' mb='2'>1. Acceptance of Terms</Heading>
            <Text fontSize='sm' color='gray.600'>
              By accessing and using the NIMI Housing website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>2. Property Listings</Heading>
            <Text fontSize='sm' color='gray.600'>
              All property details, images, and prices on our website are for informational purposes only. Actual property specifications and pricing may vary. NIMI Housing reserves the right to modify listings without prior notice.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>3. Site Visits & Bookings</Heading>
            <Text fontSize='sm' color='gray.600'>
              Scheduling a site visit or making an inquiry does not constitute a booking or reservation. Property transactions are binding only upon execution of a registered sale deed.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>4. Payments & Refunds</Heading>
            <Text fontSize='sm' color='gray.600'>
              All payments must be made through official channels only. Token advance and payment terms are subject to individual property agreements. Refund policies are governed by the respective sale agreements.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>5. Limitation of Liability</Heading>
            <Text fontSize='sm' color='gray.600'>
              NIMI Housing and Property Development Pvt Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>6. Governing Law</Heading>
            <Text fontSize='sm' color='gray.600'>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>7. Contact</Heading>
            <Text fontSize='sm' color='gray.600'>
              For questions about these terms, contact NIMI Housing at info@nimihousing.com or call 90473 35599.
            </Text>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Terms;
