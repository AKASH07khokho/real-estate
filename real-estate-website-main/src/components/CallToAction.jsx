import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiPhone } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

const CallToAction = () => {
  const bgGradient = 'linear-gradient(135deg, #702459, #D53F8C, #ED64A6)';

  const handleWhatsApp = () => {
    window.open('https://wa.me/919047335599?text=Hi%20NIMI%20Housing!%20I%20am%20interested%20in%20booking%20a%20site%20visit.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919047335599');
  };

  return (
    <Box
      my='12'
      bg={bgGradient}
      borderRadius='2xl'
      p={{ base: '8', md: '14' }}
      textAlign='center'
      position='relative'
      overflow='hidden'
    >
      {/* Decorative circles */}
      <Box
        position='absolute'
        top='-50px'
        right='-50px'
        w='200px'
        h='200px'
        borderRadius='full'
        bg='whiteAlpha.100'
      />
      <Box
        position='absolute'
        bottom='-30px'
        left='-30px'
        w='150px'
        h='150px'
        borderRadius='full'
        bg='whiteAlpha.100'
      />

      <VStack spacing='5' position='relative' zIndex='1'>
        <Heading size={{ base: 'lg', md: 'xl' }} color='white'>
          Ready to Find Your Dream Land?
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} color='pink.100' maxW='550px'>
          Book a free site visit today! Our team will personally guide you through 
          our premium land properties across Chennai.
        </Text>

        <HStack spacing='4' flexWrap='wrap' justify='center' pt='2'>
          <Button
            size='lg'
            bg='white'
            color='pink.700'
            leftIcon={<FaWhatsapp />}
            onClick={handleWhatsApp}
            _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
            transition='all 0.3s ease'
            boxShadow='lg'
          >
            WhatsApp Us
          </Button>
          <Button
            size='lg'
            variant='outline'
            color='white'
            borderColor='white'
            leftIcon={<BiPhone />}
            onClick={handleCall}
            _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
            transition='all 0.3s ease'
          >
            Call: 90473 35599
          </Button>
        </HStack>

        <Text fontSize='xs' color='pink.200' mt='2'>
          V. Radhakrishnan, Managing Director | NIMI Housing & Property Development Pvt Ltd
        </Text>
      </VStack>
    </Box>
  );
};

export default CallToAction;
