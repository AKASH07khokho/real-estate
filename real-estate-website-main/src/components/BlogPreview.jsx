import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  SimpleGrid,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { blogPosts } from '../data';

const BlogPreview = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box my='12'>
      <VStack spacing='2' mb='8' textAlign='center'>
        <Text fontSize='sm' fontWeight='bold' color='pink.500' textTransform='uppercase' letterSpacing='wider'>
          Blog & News
        </Text>
        <Heading size='lg'>Latest from NIMI Housing</Heading>
        <Text fontSize='sm' color='gray.500' maxW='500px'>
          Stay updated with the latest real estate news, buying guides, and investment tips.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing='6'>
        {blogPosts.map((post) => (
          <Box
            key={post.id}
            bg={cardBg}
            border='1px'
            borderColor={cardBorder}
            borderRadius='xl'
            p='6'
            boxShadow='md'
            className='hover-lift'
            cursor='pointer'
          >
            <VStack align='left' spacing='3'>
              <HStack>
                <Badge colorScheme='pink' borderRadius='full' px='2'>{post.category}</Badge>
                <Text fontSize='xs' color='gray.500'>{post.readTime}</Text>
              </HStack>
              <Heading size='sm' noOfLines={2}>{post.title}</Heading>
              <Text fontSize='sm' color='gray.500' noOfLines={3}>{post.excerpt}</Text>
              <Text fontSize='xs' color='gray.400'>{post.date}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BlogPreview;
