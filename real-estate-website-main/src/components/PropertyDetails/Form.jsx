import { useState } from 'react';
import { Textarea, Image, VStack, HStack, Box, Text, Input, Button, useColorModeValue } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const Form = ({searchedHouse}) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Hi, I am interested in ${searchedHouse.name} (${searchedHouse.address}). Please contact me.`);

  const handleSendToMD = (e) => {
    if (e) e.preventDefault();
    const textMsg =
      `*Property Inquiry - NIMI Housing*\n\n` +
      `*Property:* ${searchedHouse.name}\n` +
      `*Location:* ${searchedHouse.address}\n` +
      `*Price:* ₹${searchedHouse.priceDisplay}\n\n` +
      `*Customer Details:*\n` +
      `*Name:* ${name || 'Interested Customer'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Email:* ${email || 'Not provided'}\n` +
      `*Message:* ${message}`;

    window.open(`https://wa.me/919047335599?text=${encodeURIComponent(textMsg)}`, '_blank');
  };

  return (
    <VStack border='1px' borderColor='pink.100' boxShadow='lg' px='5' py='6' borderRadius='xl' bg={cardBg} minW={{ md: '320px' }}>
        <HStack spacing='3'>
            <Image borderRadius='full' boxSize='60px' objectFit='cover' src={searchedHouse.agent.image} />
            <Box>
                <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>{searchedHouse.agent.name}</Text>
                <Text style={{fontSize: '12px'}} color='gray.500'>📞 {searchedHouse.agent.phone}</Text>
                <Text fontSize='11px' fontWeight='semibold' color='pink.600'>Managing Director</Text>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px' w='100%'>
            <form style={{ width: '100%' }} onSubmit={handleSendToMD}>
                <Input mt='3' mb='2' placeholder="Your Name *" borderRadius='lg' value={name} onChange={(e) => setName(e.target.value)} isRequired />
                <Input placeholder="Email *" borderRadius='lg' type='email' value={email} onChange={(e) => setEmail(e.target.value)} isRequired />
                <Input my='2' placeholder="Phone *" borderRadius='lg' type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} isRequired />
                <Textarea my='2' placeholder='Message' size='sm' borderRadius='lg'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button type='submit' w='full' className='gradient-btn' borderRadius='full' mt='2'>
                  Send Message to MD
                </Button>
                <Button type='button' w='full' mt='2' colorScheme='whatsapp' borderRadius='full' leftIcon={<FaWhatsapp />} onClick={handleSendToMD}>
                  Send on WhatsApp (90473 35599)
                </Button>
            </form>
        </VStack>
    </VStack>
  )
}

export default Form