import { Box, IconButton } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/919047335599?text=Hi%20NIMI%20Housing!%20I%20am%20interested%20in%20your%20land%20properties.',
      '_blank'
    );
  };

  return (
    <Box position='fixed' bottom='30px' right='30px' zIndex='999'>
      <IconButton
        aria-label='Chat on WhatsApp'
        icon={<FaWhatsapp size='28' />}
        onClick={handleClick}
        bg='#25D366'
        color='white'
        borderRadius='full'
        boxSize='60px'
        boxShadow='0 4px 20px rgba(37, 211, 102, 0.5)'
        _hover={{ bg: '#20BD5A', transform: 'scale(1.1)' }}
        transition='all 0.3s ease'
        className='animate-pulse-slow'
      />
    </Box>
  );
};

export default WhatsAppFloat;
