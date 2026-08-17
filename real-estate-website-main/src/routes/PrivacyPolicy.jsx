import { VStack, Heading, Text, Box, Divider, useColorModeValue } from '@chakra-ui/react';

const PrivacyPolicy = () => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <VStack my='8' spacing='6' align='stretch'>
      <Box textAlign='center'>
        <Heading size='xl'>Privacy Policy</Heading>
        <Text fontSize='sm' color='gray.500' mt='2'>Last updated: August 2026</Text>
      </Box>

      <Box bg={cardBg} borderRadius='xl' boxShadow='md' p={{ base: '6', md: '10' }}>
        <VStack align='left' spacing='5'>
          <Box>
            <Heading size='sm' mb='2'>1. Information We Collect</Heading>
            <Text fontSize='sm' color='gray.600'>
              NIMI Housing and Property Development Pvt Ltd collects personal information such as your name, email address, phone number, and property preferences when you register, submit inquiries, or book site visits through our website.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>2. How We Use Your Information</Heading>
            <Text fontSize='sm' color='gray.600'>
              We use your information to respond to inquiries, schedule site visits, send property updates, process transactions, and improve our services. We do not sell or share your personal data with third parties without your consent.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>3. Data Security</Heading>
            <Text fontSize='sm' color='gray.600'>
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, or destruction.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>4. Cookies</Heading>
            <Text fontSize='sm' color='gray.600'>
              Our website may use cookies to enhance user experience. You can disable cookies through your browser settings at any time.
            </Text>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm' mb='2'>5. Contact Us</Heading>
            <Text fontSize='sm' color='gray.600'>
              For any privacy-related queries, contact us at info@nimihousing.com or call 90473 35599.
              Address: No.70/16, Sundarbans Ground Floor, 1st Avenue, Ashok Nagar, Chennai - 600 083.
            </Text>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default PrivacyPolicy;
