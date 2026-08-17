import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Divider,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiPhone, BiEnvelope, BiMap, BiGlobe, BiBuildings, BiGroup } from 'react-icons/bi';

const AboutUs = () => {
  return (
    <VStack my='8' spacing='8' align='stretch'>
      <Box textAlign='center'>
        <Heading size='xl' color='pink.700' mb='3'>
          About Us
        </Heading>
        <Text fontSize='lg' color='gray.600' fontWeight='semibold'>
          NIMI HOUSING AND PROPERTY DEVELOPMENT PVT LTD
        </Text>
      </Box>

      <Divider />

      {/* Company Story */}
      <Box bg='pink.50' borderRadius='xl' p={{ base: '6', md: '10' }}>
        <Heading size='md' color='pink.800' mb='4'>
          Our Story
        </Heading>
        <Text fontSize='md' color='gray.700' lineHeight='tall' mb='3'>
          NIMI Housing and Property Development Pvt Ltd is a trusted name in the real estate 
          industry, specializing in land property development and sales. Based in Chennai, we are 
          committed to helping families and investors find the perfect land property that suits 
          their needs and budget.
        </Text>
        <Text fontSize='md' color='gray.700' lineHeight='tall'>
          Under the leadership of our Managing Director, <strong>V. Radhakrishnan</strong>, we have 
          built a reputation for transparency, legal compliance, and customer satisfaction. Our team 
          ensures that every property we offer is thoroughly verified and legally clear.
        </Text>
      </Box>

      {/* Stats */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing='6'>
        <Box bg='white' border='1px' borderColor='pink.100' borderRadius='xl' boxShadow='md' p='6' textAlign='center'>
          <Icon as={BiBuildings} color='pink.600' boxSize='8' mb='2' />
          <Heading size='lg' color='pink.700'>500+</Heading>
          <Text fontSize='sm' color='gray.500'>Properties Sold</Text>
        </Box>
        <Box bg='white' border='1px' borderColor='pink.100' borderRadius='xl' boxShadow='md' p='6' textAlign='center'>
          <Icon as={BiGroup} color='pink.600' boxSize='8' mb='2' />
          <Heading size='lg' color='pink.700'>1000+</Heading>
          <Text fontSize='sm' color='gray.500'>Happy Customers</Text>
        </Box>
        <Box bg='white' border='1px' borderColor='pink.100' borderRadius='xl' boxShadow='md' p='6' textAlign='center'>
          <Icon as={BiMap} color='pink.600' boxSize='8' mb='2' />
          <Heading size='lg' color='pink.700'>50+</Heading>
          <Text fontSize='sm' color='gray.500'>Locations Covered</Text>
        </Box>
      </SimpleGrid>

      {/* Managing Director */}
      <Box
        bg='white'
        border='1px'
        borderColor='pink.100'
        borderRadius='xl'
        boxShadow='lg'
        p={{ base: '6', md: '8' }}
      >
        <Heading size='md' color='pink.800' mb='4'>
          Leadership
        </Heading>
        <Box bg='pink.50' p='6' borderRadius='lg'>
          <Heading size='md' color='pink.700'>V. Radhakrishnan</Heading>
          <Text fontSize='sm' color='gray.600' mb='4'>Managing Director</Text>
          <VStack align='left' spacing='3'>
            <HStack>
              <Icon as={BiPhone} color='pink.600' boxSize='5' />
              <Text fontSize='md'>90473 35599</Text>
            </HStack>
            <HStack>
              <Icon as={BiEnvelope} color='pink.600' boxSize='5' />
              <Text fontSize='md'>info@nimihousing.com</Text>
            </HStack>
            <HStack>
              <Icon as={BiGlobe} color='pink.600' boxSize='5' />
              <Text fontSize='md'>www.nimihousing.com</Text>
            </HStack>
            <HStack align='flex-start'>
              <Icon as={BiMap} color='pink.600' boxSize='5' mt='1' />
              <Text fontSize='md'>
                No.70/16, Sundarbans Ground Floor, 1st Avenue, Ashok Nagar, Chennai - 600 083
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Box>

      {/* Mission */}
      <Box bg='pink.700' borderRadius='xl' p={{ base: '6', md: '10' }} textAlign='center'>
        <Heading size='md' color='white' mb='3'>
          Our Mission
        </Heading>
        <Text fontSize='md' color='pink.100' maxW='600px' mx='auto'>
          To provide affordable, legally verified land properties with complete transparency, 
          ensuring every customer achieves their dream of owning land in prime locations.
        </Text>
      </Box>
    </VStack>
  );
};

export default AboutUs;
