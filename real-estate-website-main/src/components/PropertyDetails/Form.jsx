import { Textarea, Image, VStack, HStack, Box, Text, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa';

const Form = ({searchedHouse}) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919047335599?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(searchedHouse.name)}`, '_blank');
  };

  return (
    <VStack border='1px' borderColor='pink.100' boxShadow='lg' px='5' py='6' borderRadius='xl' bg={cardBg} minW={{ md: '320px' }}>
        <HStack>
            <Image borderRadius='full' boxSize='65px' src={searchedHouse.agent.image} />
            <Box>
                <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>{searchedHouse.agent.name}</Text>
                <Text style={{fontSize: '12px'}} color='gray.500'>+{searchedHouse.agent.phone}</Text>
                <Text fontSize='10px' color='pink.500'>Managing Director</Text>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px' w='100%'>
            <form style={{ width: '100%' }}>
                <Input mt='3' mb='2' placeholder="Your Name *" borderRadius='lg' />
                <Input placeholder="Email *" borderRadius='lg' />
                <Input my='2' placeholder="Phone *" borderRadius='lg' />
                <Textarea my='2' placeholder='Message' size='sm' borderRadius='lg'
                  defaultValue={`Hi, I am interested in ${searchedHouse.name} - ${searchedHouse.address}`}
                />
                <HStack my='2'>
                    <Button w='full' className='gradient-btn' borderRadius='full'>Send Message</Button>
                </HStack>
                <Button w='full' variant='outline' colorScheme='green' borderRadius='full' leftIcon={<FaWhatsapp />} onClick={handleWhatsApp}>
                  WhatsApp
                </Button>
            </form>
        </VStack>
    </VStack>
  )
}

export default Form