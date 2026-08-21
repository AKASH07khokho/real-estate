import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  SimpleGrid,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { BiMap, BiShield, BiDollar, BiCheck, BiHome, BiFile } from 'react-icons/bi';

const features = [
  {
    icon: BiMap,
    title: 'Prime Locations',
    desc: 'We offer land properties in premium locations across Chennai and surrounding areas with excellent connectivity and growth potential.',
  },
  {
    icon: BiShield,
    title: 'Legal Verification',
    desc: 'Every property is thoroughly verified for clear title, encumbrance certificates, and all legal documentation before listing.',
  },
  {
    icon: BiDollar,
    title: 'Best Pricing',
    desc: 'We provide competitive pricing with flexible payment options and transparent cost breakdowns — no hidden charges.',
  },
  {
    icon: BiCheck,
    title: 'RERA Approved',
    desc: 'All our land properties are RERA registered and comply with government regulations for your peace of mind.',
  },
  {
    icon: BiHome,
    title: 'Site Visit Assistance',
    desc: 'Our team arranges free site visits with proper guidance and detailed information about the property and its surroundings.',
  },
  {
    icon: BiFile,
    title: 'Complete Documentation',
    desc: 'We handle all paperwork — from sale deed registration to mutation — ensuring a smooth and hassle-free buying experience.',
  },
];

const Features = () => {
  return (
    <VStack my='8' spacing='8' align='stretch'>
      <Box textAlign='center'>
        <Heading size='xl' color='pink.700' mb='3'>
          Why Choose NIMI HOUSING?
        </Heading>
        <Text fontSize='md' color='gray.500' maxW='600px' mx='auto'>
          NIMI Housing and Property Development Pvt Ltd offers trusted land property 
          solutions with complete transparency and legal assurance.
        </Text>
      </Box>

      <Divider />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='6'>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg='white'
            border='1px'
            borderColor='pink.100'
            borderRadius='xl'
            boxShadow='md'
            p='6'
            _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
            transition='all 0.2s'
          >
            <HStack mb='3'>
              <Box bg='pink.50' p='2' borderRadius='lg'>
                <Icon as={feature.icon} color='pink.600' boxSize='6' />
              </Box>
              <Heading size='sm' color='pink.800'>
                {feature.title}
              </Heading>
            </HStack>
            <Text fontSize='sm' color='gray.600'>
              {feature.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box bg='pink.50' borderRadius='xl' p='8' textAlign='center'>
        <Heading size='md' color='pink.700' mb='2'>
          Ready to invest in land?
        </Heading>
        <Text fontSize='sm' color='gray.600'>
          Contact S. V. Radhakrishnan at <strong>90473 35599</strong> or email us at <strong>info@nimihousing.com</strong>
        </Text>
      </Box>
    </VStack>
  );
};

export default Features;
