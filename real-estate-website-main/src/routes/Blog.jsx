import {
  VStack,
  Heading,
  Text,
  Box,
  Badge,
  HStack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { blogPosts } from '../data';

const Blog = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.100', 'gray.700');

  return (
    <VStack my='8' spacing='8' align='stretch'>
      <Box textAlign='center'>
        <Text fontSize='sm' fontWeight='bold' color='pink.500' textTransform='uppercase' letterSpacing='wider'>
          Knowledge Centre
        </Text>
        <Heading size='xl' mt='2'>Blog & News</Heading>
        <Text fontSize='sm' color='gray.500' mt='2' maxW='500px' mx='auto'>
          Expert insights on real estate, investment tips, and legal guidance for land buyers in Chennai.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing='6'>
        {blogPosts.map((post) => (
          <Box
            key={post.id}
            bg={cardBg}
            border='1px'
            borderColor={cardBorder}
            borderRadius='xl'
            p='8'
            boxShadow='md'
            className='hover-lift'
          >
            <VStack align='left' spacing='4'>
              <HStack>
                <Badge colorScheme='pink' borderRadius='full' px='3'>{post.category}</Badge>
                <Text fontSize='xs' color='gray.500'>{post.readTime}</Text>
              </HStack>
              <Heading size='md'>{post.title}</Heading>
              <Text fontSize='sm' color='gray.500'>{post.excerpt}</Text>
              <Divider />
              <Text fontSize='xs' color='gray.400'>{post.date}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Box bg='pink.50' borderRadius='xl' p='8' textAlign='center'>
        <Heading size='sm' color='pink.700' mb='2'>Have Questions?</Heading>
        <Text fontSize='sm' color='gray.600'>
          Contact us at <strong>90473 35599</strong> or email <strong>info@nimihousing.com</strong> for expert advice.
        </Text>
      </Box>
    </VStack>
  );
};

export default Blog;
