import { useRef } from 'react';
import { VStack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Button, IconButton, useDisclosure, Center, Divider, Image, Box } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.jpg';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
        <IconButton variant='ghost'
            icon={<FiMenu fontSize='1.35rem' />}
            aria-label='Open Menu'
            onClick={onOpen} ref={btnRef}
        />
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <Center mt='4'>
                  <Box bg='white' p='1.5' borderRadius='lg' boxShadow='sm'>
                    <Image src={LogoImg} alt='NIMI HOUSING Logo' h='42px' objectFit='contain' />
                  </Box>
                </Center>
                <DrawerBody px='10' mt='2'>
                    <VStack as='nav' spacing='5' alignItems='left'>
                        <Link to='/' onClick={onClose}><Button variant='link' w='full' justifyContent='left'>Home</Button></Link>
                        <Link to='/features' onClick={onClose}><Button variant='link' w='full' justifyContent='left'>Features</Button></Link>
                        <Link to='/about' onClick={onClose}><Button variant='link' w='full' justifyContent='left'>About Us</Button></Link>
                        <Link to='/emi-calculator' onClick={onClose}><Button variant='link' w='full' justifyContent='left'>EMI Calculator</Button></Link>
                        <Link to='/blog' onClick={onClose}><Button variant='link' w='full' justifyContent='left'>Blog</Button></Link>
                        <Link to='/faq' onClick={onClose}><Button variant='link' w='full' justifyContent='left'>FAQ</Button></Link>
                        <Divider />
                        <Link to='/contact' onClick={onClose}><Button size='sm' className='gradient-btn' w='full' borderRadius='full'>Contact</Button></Link>
                        <Link to='/signup' onClick={onClose}><Button size='sm' variant='outline' w='full' borderRadius='full'>Sign up</Button></Link>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default NavMobile