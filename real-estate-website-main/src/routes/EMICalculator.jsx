import {
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Input,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SimpleGrid,
  Divider,
  useColorModeValue,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const cardBg = useColorModeValue('white', 'gray.800');

  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (val) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <VStack my='8' spacing='8' align='stretch'>
      <Box textAlign='center'>
        <Text fontSize='sm' fontWeight='bold' color='pink.500' textTransform='uppercase' letterSpacing='wider'>
          Financial Tools
        </Text>
        <Heading size='xl' mt='2'>EMI Calculator</Heading>
        <Text fontSize='sm' color='gray.500' mt='2'>
          Calculate your monthly EMI for land purchase loans
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing='8'>
        {/* Input Section */}
        <Box bg={cardBg} borderRadius='xl' boxShadow='lg' p='8'>
          <VStack spacing='6' align='stretch'>
            <FormControl>
              <FormLabel fontSize='sm' fontWeight='600'>
                Loan Amount: {formatCurrency(loanAmount)}
              </FormLabel>
              <Slider
                value={loanAmount}
                min={100000}
                max={50000000}
                step={100000}
                onChange={setLoanAmount}
                colorScheme='pink'
              >
                <SliderTrack><SliderFilledTrack /></SliderTrack>
                <SliderThumb boxSize='5' />
              </Slider>
              <HStack justify='space-between' mt='1'>
                <Text fontSize='xs' color='gray.400'>₹ 1 Lakh</Text>
                <Text fontSize='xs' color='gray.400'>₹ 5 Crore</Text>
              </HStack>
            </FormControl>

            <FormControl>
              <FormLabel fontSize='sm' fontWeight='600'>
                Interest Rate: {interestRate}% per annum
              </FormLabel>
              <Slider
                value={interestRate}
                min={5}
                max={20}
                step={0.1}
                onChange={setInterestRate}
                colorScheme='pink'
              >
                <SliderTrack><SliderFilledTrack /></SliderTrack>
                <SliderThumb boxSize='5' />
              </Slider>
              <HStack justify='space-between' mt='1'>
                <Text fontSize='xs' color='gray.400'>5%</Text>
                <Text fontSize='xs' color='gray.400'>20%</Text>
              </HStack>
            </FormControl>

            <FormControl>
              <FormLabel fontSize='sm' fontWeight='600'>
                Loan Tenure: {tenure} Years
              </FormLabel>
              <Slider
                value={tenure}
                min={1}
                max={30}
                step={1}
                onChange={setTenure}
                colorScheme='pink'
              >
                <SliderTrack><SliderFilledTrack /></SliderTrack>
                <SliderThumb boxSize='5' />
              </Slider>
              <HStack justify='space-between' mt='1'>
                <Text fontSize='xs' color='gray.400'>1 Year</Text>
                <Text fontSize='xs' color='gray.400'>30 Years</Text>
              </HStack>
            </FormControl>
          </VStack>
        </Box>

        {/* Results Section */}
        <VStack spacing='4'>
          <Box
            bg='linear-gradient(135deg, #702459, #D53F8C)'
            borderRadius='xl'
            p='8'
            w='100%'
            textAlign='center'
            color='white'
          >
            <Text fontSize='sm' fontWeight='500' color='pink.100'>Monthly EMI</Text>
            <Heading size='2xl' mt='2'>
              ₹ {Math.round(emi).toLocaleString('en-IN')}
            </Heading>
          </Box>

          <SimpleGrid columns={2} spacing='4' w='100%'>
            <Box bg={cardBg} borderRadius='xl' p='5' boxShadow='md' textAlign='center'>
              <Text fontSize='xs' color='gray.500'>Total Payment</Text>
              <Text fontWeight='bold' fontSize='lg' color='pink.600' mt='1'>
                {formatCurrency(Math.round(totalPayment))}
              </Text>
            </Box>
            <Box bg={cardBg} borderRadius='xl' p='5' boxShadow='md' textAlign='center'>
              <Text fontSize='xs' color='gray.500'>Total Interest</Text>
              <Text fontWeight='bold' fontSize='lg' color='orange.500' mt='1'>
                {formatCurrency(Math.round(totalInterest))}
              </Text>
            </Box>
          </SimpleGrid>

          <Box bg={cardBg} borderRadius='xl' p='5' boxShadow='md' w='100%'>
            <Text fontSize='sm' fontWeight='600' mb='3'>Payment Breakdown</Text>
            <Box bg='gray.100' borderRadius='full' h='4' overflow='hidden'>
              <Box
                bg='pink.500'
                h='100%'
                w={`${(loanAmount / totalPayment) * 100}%`}
                borderRadius='full'
              />
            </Box>
            <HStack justify='space-between' mt='2'>
              <HStack>
                <Box w='3' h='3' bg='pink.500' borderRadius='full' />
                <Text fontSize='xs'>Principal ({((loanAmount / totalPayment) * 100).toFixed(1)}%)</Text>
              </HStack>
              <HStack>
                <Box w='3' h='3' bg='gray.300' borderRadius='full' />
                <Text fontSize='xs'>Interest ({((totalInterest / totalPayment) * 100).toFixed(1)}%)</Text>
              </HStack>
            </HStack>
          </Box>

          <Text fontSize='xs' color='gray.400' textAlign='center'>
            * This is an indicative calculation. Actual EMI may vary based on the lending institution.
          </Text>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default EMICalculator;
