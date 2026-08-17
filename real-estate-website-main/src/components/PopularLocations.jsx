import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { popularLocations } from '../data';

const PopularLocations = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const colors = ['pink.500', 'purple.500', 'blue.500', 'teal.500', 'orange.500', 'cyan.500', 'red.400', 'green.500'];

  return (
    <Box my='12'>
      <VStack spacing='2' mb='8' textAlign='center'>
        <Text fontSize='sm' fontWeight='bold' color='pink.500' textTransform='uppercase' letterSpacing='wider'>
          Popular Areas
        </Text>
        <Heading size='lg'>Explore Top Locations</Heading>
        <Text fontSize='sm' color='gray.500' maxW='500px'>
          Discover land properties in Chennai's most sought-after neighbourhoods.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing='4'>
        {popularLocations.map((loc, i) => (
          <Box
            key={i}
            bg={cardBg}
            borderRadius='xl'
            p='5'
            boxShadow='md'
            className='hover-lift'
            cursor='pointer'
            borderTop='3px solid'
            borderTopColor={colors[i % colors.length]}
            transition='all 0.3s ease'
          >
            <VStack align='left' spacing='2'>
              <HStack>
                <Icon as={BiMap} color={colors[i % colors.length]} boxSize='5' />
                <Text fontWeight='bold' fontSize='md'>{loc.name}</Text>
              </HStack>
              <Text fontSize='xs' color='gray.500'>{loc.properties} Properties</Text>
              <Text fontSize='sm' fontWeight='semibold' color='pink.600'>
                ₹ {loc.avgPrice}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PopularLocations;
