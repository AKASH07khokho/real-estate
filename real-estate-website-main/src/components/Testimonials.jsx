import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiStar } from 'react-icons/bi';
import { testimonials } from '../data';

const Testimonials = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box my='12'>
      <VStack spacing='2' mb='8' textAlign='center'>
        <Text fontSize='sm' fontWeight='bold' color='pink.500' textTransform='uppercase' letterSpacing='wider'>
          Testimonials
        </Text>
        <Heading size='lg'>What Our Customers Say</Heading>
        <Text fontSize='sm' color='gray.500' maxW='500px'>
          Hear from our happy customers who found their perfect land property with NIMI Housing.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing='6'>
        {testimonials.map((t, i) => (
          <Box
            key={i}
            bg={cardBg}
            border='1px'
            borderColor={cardBorder}
            borderRadius='xl'
            p='6'
            boxShadow='md'
            className='hover-lift'
            position='relative'
            _before={{
              content: '"""',
              position: 'absolute',
              top: '10px',
              left: '20px',
              fontSize: '60px',
              color: 'pink.200',
              fontFamily: 'serif',
              lineHeight: '1',
            }}
          >
            <VStack align='left' spacing='3' pt='6'>
              <HStack spacing='1'>
                {[...Array(t.rating)].map((_, j) => (
                  <Icon key={j} as={BiStar} color='yellow.400' boxSize='4' />
                ))}
                {[...Array(5 - t.rating)].map((_, j) => (
                  <Icon key={j} as={BiStar} color='gray.300' boxSize='4' />
                ))}
              </HStack>
              <Text fontSize='sm' color='gray.600' fontStyle='italic'>
                "{t.text}"
              </Text>
              <Box>
                <Text fontWeight='bold' fontSize='sm'>{t.name}</Text>
                <Text fontSize='xs' color='gray.500'>{t.location}</Text>
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
