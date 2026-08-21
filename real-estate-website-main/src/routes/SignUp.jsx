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
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import LogoImg from '../assets/images/logo.jpg';

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

  const getMDMessage = () => {
    return (
      `*New Customer Registration - NIMI Housing*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Interest:* ${formData.interest || 'Not Specified'}\n` +
      `*Preferred Location:* ${formData.location || 'Not Specified'}\n` +
      `*Budget:* ${formData.budget || 'Not Specified'}\n\n` +
      `Please contact me for property guidance.`
    );
  };

  const handleWhatsAppSend = () => {
    const url = `https://wa.me/919047335599?text=${encodeURIComponent(getMDMessage())}`;
    window.open(url, '_blank');
  };

  const handleCallMD = () => {
    window.open('tel:+919047335599');
  };

  const handleSMSSend = () => {
    window.open(`sms:+919047335599?body=${encodeURIComponent(getMDMessage())}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Automatically trigger SMS window to send details to MD
    handleSMSSend();
  };

  if (submitted) {
    return (
      <VStack my='10' spacing='6' align='center'>
        <Box
          bg='white'
          border='2px solid'
          borderColor='green.400'
          borderRadius='2xl'
          p={{ base: '6', md: '10' }}
          textAlign='center'
          maxW='550px'
          boxShadow='2xl'
        >
          <Box bg='white' p='2' borderRadius='xl' display='inline-block' mb='4' boxShadow='md'>
            <Image src={LogoImg} alt='NIMI Housing Logo' h='50px' objectFit='contain' />
          </Box>

          <Heading size='lg' color='green.600' mb='2'>
            ✅ Registration Successful!
          </Heading>
          <Text fontSize='md' color='gray.700' mb='4'>
            Thank you, <strong>{formData.name}</strong>! Your registration has been received.
          </Text>

          <Box bg='green.50' p='4' borderRadius='xl' mb='5' border='1px border-dashed' borderColor='green.300'>
            <Text fontSize='sm' fontWeight='semibold' color='green.800' mb='1'>
              📱 Direct Notification to Managing Director
            </Text>
            <Text fontSize='xs' color='gray.600'>
              We are connecting your registration details directly to Managing Director <strong>S. V. Radhakrishnan</strong> (90473 35599).
            </Text>
          </Box>

          <VStack spacing='3' w='full'>
            <Button
              w='full'
              colorScheme='whatsapp'
              size='lg'
              leftIcon={<FaWhatsapp fontSize='20px' />}
              onClick={handleWhatsAppSend}
              borderRadius='full'
              boxShadow='md'
            >
              Send Details to MD on WhatsApp
            </Button>

            <HStack w='full' spacing='3'>
              <Button
                flex='1'
                colorScheme='pink'
                variant='outline'
                leftIcon={<FaPhoneAlt />}
                onClick={handleCallMD}
                borderRadius='full'
              >
                Call MD: 90473 35599
              </Button>
              <Button
                flex='1'
                colorScheme='blue'
                variant='outline'
                leftIcon={<BiCommentDetail />}
                onClick={handleSMSSend}
                borderRadius='full'
              >
                Send SMS to MD
              </Button>
            </HStack>
          </VStack>

          <Divider my='5' />

          <Button variant='ghost' size='sm' colorScheme='gray' onClick={() => setSubmitted(false)}>
            Register Another Person
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
        borderRadius='2xl'
        boxShadow='xl'
        p={{ base: '6', md: '10' }}
        w={{ base: '100%', md: '550px' }}
      >
        <VStack spacing='4' align='stretch'>
          <Box textAlign='center'>
            <Box bg='white' p='2' borderRadius='xl' display='inline-block' mb='2' boxShadow='sm'>
              <Image src={LogoImg} alt='NIMI Housing Logo' h='55px' objectFit='contain' />
            </Box>
            <Heading size='lg' color='pink.700'>
              Sign Up / Register
            </Heading>
            <Text fontSize='sm' color='gray.500' mt='1'>
              Directly connected to Managing Director <strong>S. V. Radhakrishnan</strong>
            </Text>
          </Box>

          <Divider my='2' />

          <form onSubmit={handleSubmit}>
            <VStack spacing='3.5'>
              <Input
                name='name'
                placeholder='Full Name *'
                value={formData.name}
                onChange={handleChange}
                isRequired
                borderRadius='lg'
              />
              <Input
                name='email'
                type='email'
                placeholder='Email Address *'
                value={formData.email}
                onChange={handleChange}
                isRequired
                borderRadius='lg'
              />
              <Input
                name='phone'
                type='tel'
                placeholder='Phone Number *'
                value={formData.phone}
                onChange={handleChange}
                isRequired
                borderRadius='lg'
              />
              <Select
                name='interest'
                placeholder='Select Interest *'
                value={formData.interest}
                onChange={handleChange}
                borderRadius='lg'
              >
                <option value='Buy Land / Plot'>Buy Land / Plot</option>
                <option value='Sell Land'>Sell Land</option>
                <option value='Investment Inquiry'>Investment Inquiry</option>
                <option value='Book Site Visit'>Book Site Visit</option>
              </Select>
              <Input
                name='location'
                placeholder='Preferred Location (e.g. Ashok Nagar, Tambaram, OMR)'
                value={formData.location}
                onChange={handleChange}
                borderRadius='lg'
              />
              <Select
                name='budget'
                placeholder='Budget Range'
                value={formData.budget}
                onChange={handleChange}
                borderRadius='lg'
              >
                <option value='Under 10 Lakhs'>Under 10 Lakhs</option>
                <option value='10 - 25 Lakhs'>10 - 25 Lakhs</option>
                <option value='25 - 50 Lakhs'>25 - 50 Lakhs</option>
                <option value='50 Lakhs - 1 Crore'>50 Lakhs - 1 Crore</option>
                <option value='Above 1 Crore'>Above 1 Crore</option>
              </Select>

              <Button type='submit' w='full' className='gradient-btn' size='lg' mt='2' borderRadius='full'>
                Register Now & Notify MD
              </Button>
            </VStack>
          </form>

          <Divider my='2' />

          <Box textAlign='center'>
            <Text fontSize='xs' color='gray.500'>
              Managing Director Direct Contact:
            </Text>
            <Text fontSize='md' fontWeight='bold' color='pink.700' mt='0.5'>
              📞 90473 35599
            </Text>
            <Text fontSize='xs' color='gray.500'>
              S. V. Radhakrishnan, Managing Director
            </Text>
            <HStack justify='center' mt='2' spacing='4'>
              <Text fontSize='xs' color='gray.500'>
                ✉️ info@nimihousing.com
              </Text>
              <Text fontSize='xs' color='gray.500'>
                🌐 www.nimihousing.com
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SignUp;

