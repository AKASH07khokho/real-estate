import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { BiPhone, BiEnvelope, BiMap, BiGlobe } from 'react-icons/bi';

const Contact = () => {
  return (
    <VStack my='8' spacing='6' align='center'>
      <Box
        bg='white'
        border='1px'
        borderColor='pink.100'
        borderRadius='xl'
        boxShadow='lg'
        p={{ base: '6', md: '10' }}
        w={{ base: '100%', md: '550px' }}
      >
        <VStack spacing='5' align='stretch'>
          <Heading size='lg' color='pink.700' textAlign='center'>
            Contact Us
          </Heading>
          <Text fontSize='sm' color='gray.500' textAlign='center'>
            NIMI HOUSING AND PROPERTY DEVELOPMENT PVT LTD
          </Text>

          <Divider />

          <Box bg='pink.50' p='6' borderRadius='lg'>
            <Text fontWeight='bold' fontSize='lg' color='pink.800' mb='1'>
              V. Radhakrishnan
            </Text>
            <Text fontSize='sm' color='gray.600'>
              Managing Director
            </Text>
          </Box>

          <VStack align='left' spacing='4' px='2'>
            <HStack>
              <Icon as={BiPhone} color='pink.600' boxSize='5' />
              <Text fontSize='md' fontWeight='semibold'>90473 35599</Text>
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

          <Divider />

          <Text fontSize='xs' color='gray.400' textAlign='center'>
            © {new Date().getFullYear()} NIMI HOUSING AND PROPERTY DEVELOPMENT PVT LTD. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Contact;
