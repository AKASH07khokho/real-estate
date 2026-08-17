import {
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Box,
  HStack,
  Divider,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    location: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <VStack my='10' spacing='6' align='center'>
        <Box
          bg='green.50'
          border='1px'
          borderColor='green.300'
          borderRadius='xl'
          p='10'
          textAlign='center'
          maxW='500px'
        >
          <Heading size='lg' color='green.600' mb='4'>
            ✅ Registration Successful!
          </Heading>
          <Text fontSize='md' mb='3'>
            Thank you, <strong>{formData.name}</strong>! Your details have been submitted successfully.
          </Text>
          <Divider my='4' />
          <Text fontSize='sm' color='gray.600'>
            Our team will contact you shortly at <strong>{formData.phone}</strong>
          </Text>
          <Text fontSize='sm' color='gray.600' mt='2'>
            For immediate assistance, call us at:
          </Text>
          <Text fontSize='lg' fontWeight='bold' color='pink.700' mt='1'>
            📞 90473 35599
          </Text>
          <Text fontSize='sm' color='gray.500' mt='2'>
            V. Radhakrishnan, Managing Director
          </Text>
          <Button mt='6' colorScheme='pink' onClick={() => setSubmitted(false)}>
            Register Another
          </Button>
        </Box>
      </VStack>
    );
  }

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
        <VStack spacing='4' align='stretch'>
          <Heading size='lg' color='pink.700' textAlign='center'>
            Sign Up
          </Heading>
          <Text fontSize='sm' color='gray.500' textAlign='center'>
            Register your interest with NIMI HOUSING AND PROPERTY DEVELOPMENT PVT LTD
          </Text>

          <Divider my='2' />

          <form onSubmit={handleSubmit}>
            <VStack spacing='3'>
              <Input
                name='name'
                placeholder='Full Name *'
                value={formData.name}
                onChange={handleChange}
                isRequired
              />
              <Input
                name='email'
                type='email'
                placeholder='Email Address *'
                value={formData.email}
                onChange={handleChange}
                isRequired
              />
              <Input
                name='phone'
                type='tel'
                placeholder='Phone Number *'
                value={formData.phone}
                onChange={handleChange}
                isRequired
              />
              <Select
                name='interest'
                placeholder='Select Interest *'
                value={formData.interest}
                onChange={handleChange}
              >
                <option value='Buy Land'>Buy Land</option>
                <option value='Sell Land'>Sell Land</option>
                <option value='Investment'>Investment</option>
                <option value='Site Visit'>Site Visit</option>
              </Select>
              <Input
                name='location'
                placeholder='Preferred Location'
                value={formData.location}
                onChange={handleChange}
              />
              <Select
                name='budget'
                placeholder='Budget Range'
                value={formData.budget}
                onChange={handleChange}
              >
                <option value='Under 10 Lakhs'>Under 10 Lakhs</option>
                <option value='10 - 25 Lakhs'>10 - 25 Lakhs</option>
                <option value='25 - 50 Lakhs'>25 - 50 Lakhs</option>
                <option value='50 Lakhs - 1 Crore'>50 Lakhs - 1 Crore</option>
                <option value='Above 1 Crore'>Above 1 Crore</option>
              </Select>

              <Button type='submit' w='full' colorScheme='pink' size='lg' mt='2'>
                Register Now
              </Button>
            </VStack>
          </form>

          <Divider my='2' />

          <Box textAlign='center'>
            <Text fontSize='sm' color='gray.500'>
              Or contact us directly:
            </Text>
            <Text fontSize='md' fontWeight='bold' color='pink.700' mt='1'>
              📞 90473 35599
            </Text>
            <Text fontSize='xs' color='gray.500'>
              V. Radhakrishnan, Managing Director
            </Text>
            <HStack justify='center' mt='2' spacing='4'>
              <Text fontSize='xs' color='gray.500'>
                ✉️ info@nimihousing.com
              </Text>
              <Text fontSize='xs' color='gray.500'>
                🌐 www.nimihousing.com
              </Text>
            </HStack>
            <Text fontSize='xs' color='gray.400' mt='2'>
              No.70/16, Sundarbans Ground Floor, 1st Avenue, Ashok Nagar, Chennai - 600 083
            </Text>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SignUp;
