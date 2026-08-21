import { Text, Box, VStack, HStack, SimpleGrid, Heading, Icon, Divider, useColorModeValue, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiPhone, BiEnvelope, BiMap, BiGlobe } from 'react-icons/bi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import LogoImg from '../assets/images/logo.jpg';

const Footer = () => {
  const footerBg = useColorModeValue('gray.800', 'gray.900');

  return (
    <Box bg={footerBg} color='white' mt='8'>
      <Box maxW='container.lg' mx='auto' px='6' py='12'>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing='8' mb='8'>
          {/* Company Info */}
          <VStack align='left' spacing='3'>
            <Box bg='white' p='2' borderRadius='xl' display='inline-block' maxW='230px'>
              <Image src={LogoImg} alt='NIMI HOUSING Logo' h='48px' objectFit='contain' />
            </Box>
            <Text fontSize='xs' color='gray.400'>
              NIMI Housing and Property Development Pvt Ltd
            </Text>
            <HStack>
              <Icon as={BiPhone} color='pink.400' />
              <Text fontSize='sm'>90473 35599</Text>
            </HStack>
            <HStack>
              <Icon as={BiEnvelope} color='pink.400' />
              <Text fontSize='sm'>info@nimihousing.com</Text>
            </HStack>
            <HStack align='flex-start'>
              <Icon as={BiMap} color='pink.400' mt='1' />
              <Text fontSize='xs' color='gray.400'>
                No.70/16, Sundarbans Ground Floor, 1st Avenue, Ashok Nagar, Chennai - 600 083
              </Text>
            </HStack>
            <HStack spacing='3' pt='2'>
              <Box as='a' href='https://wa.me/919047335599' target='_blank' _hover={{ color: 'green.400' }}>
                <FaWhatsapp size='20' />
              </Box>
              <Box _hover={{ color: 'pink.400' }} cursor='pointer'>
                <FaInstagram size='20' />
              </Box>
              <Box _hover={{ color: 'blue.400' }} cursor='pointer'>
                <FaFacebook size='20' />
              </Box>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align='left' spacing='2'>
            <Heading size='sm' mb='2'>Quick Links</Heading>
            <Link to='/'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Home</Text></Link>
            <Link to='/features'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Features</Text></Link>
            <Link to='/about'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>About Us</Text></Link>
            <Link to='/contact'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Contact</Text></Link>
            <Link to='/signup'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Sign Up</Text></Link>
            <Link to='/blog'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Blog</Text></Link>
          </VStack>

          {/* Tools & Legal */}
          <VStack align='left' spacing='2'>
            <Heading size='sm' mb='2'>Tools & Legal</Heading>
            <Link to='/emi-calculator'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>EMI Calculator</Text></Link>
            <Link to='/faq'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>FAQ</Text></Link>
            <Link to='/privacy-policy'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Privacy Policy</Text></Link>
            <Link to='/terms'><Text fontSize='sm' color='gray.400' _hover={{ color: 'pink.300' }}>Terms & Conditions</Text></Link>
          </VStack>
        </SimpleGrid>

        <Divider borderColor='gray.700' />
        <Text fontSize='xs' color='gray.500' textAlign='center' mt='6'>
          © {new Date().getFullYear()} NIMI HOUSING AND PROPERTY DEVELOPMENT PVT LTD. All rights reserved.
          <br />S. V. Radhakrishnan, Managing Director
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;