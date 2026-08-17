import {
  VStack,
  Heading,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { faqData } from '../data';

const FAQ = () => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <VStack my='8' spacing='8' align='stretch'>
      <Box textAlign='center'>
        <Text fontSize='sm' fontWeight='bold' color='pink.500' textTransform='uppercase' letterSpacing='wider'>
          Help Centre
        </Text>
        <Heading size='xl' mt='2'>Frequently Asked Questions</Heading>
        <Text fontSize='sm' color='gray.500' mt='2' maxW='500px' mx='auto'>
          Find answers to common questions about buying land with NIMI Housing.
        </Text>
      </Box>

      <Box maxW='700px' mx='auto' w='100%'>
        <Accordion allowMultiple>
          {faqData.map((faq, i) => (
            <AccordionItem key={i} border='none' mb='3'>
              <AccordionButton
                bg={cardBg}
                borderRadius='xl'
                boxShadow='sm'
                p='5'
                _hover={{ bg: 'pink.50' }}
                _expanded={{ bg: 'pink.50', boxShadow: 'md' }}
              >
                <Box flex='1' textAlign='left'>
                  <Text fontWeight='600' fontSize='sm'>{faq.q}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb='4' px='5' pt='3'>
                <Text fontSize='sm' color='gray.600'>{faq.a}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      <Box bg='pink.700' borderRadius='xl' p='8' textAlign='center'>
        <Heading size='md' color='white' mb='2'>Still have questions?</Heading>
        <Text fontSize='sm' color='pink.100'>
          Call us at <strong>90473 35599</strong> or visit our office at Ashok Nagar, Chennai.
        </Text>
      </Box>
    </VStack>
  );
};

export default FAQ;
