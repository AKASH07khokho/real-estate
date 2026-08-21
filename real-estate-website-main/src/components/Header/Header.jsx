import { Flex, Heading, Button, HStack, chakra, ButtonGroup, useBreakpointValue, IconButton, useColorMode, useColorModeValue, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMoon, BiSun } from 'react-icons/bi';
import NavMobile from './NavMobile';
import LogoImg from '../../assets/images/logo.jpg';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('whiteAlpha.900', 'gray.900');

  return (
    <chakra.header id="header" borderBottom='1px solid' borderColor={useColorModeValue('gray.200', 'gray.700')} bg={headerBg} position='sticky' top='0' zIndex='100' backdropFilter='blur(10px)'>
      <Flex w='100%' py='3' align='center' justify='space-between'>
        <Link to='/'>
          <Box bg='white' p='1.5' borderRadius='lg' boxShadow='sm' display='inline-block' _hover={{ transform: 'scale(1.02)' }} transition='all 0.2s'>
            <Image src={LogoImg} alt='NIMI HOUSING Logo' h={{ base: '42px', md: '52px' }} objectFit='contain' />
          </Box>
        </Link>
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='5'>
                <Link to='/'><Button fontSize='15px' fontWeight='500'>Home</Button></Link>
                <Link to='/features'><Button fontSize='15px' fontWeight='500'>Features</Button></Link>
                <Link to='/about'><Button fontSize='15px' fontWeight='500'>About Us</Button></Link>
                <Link to='/emi-calculator'><Button fontSize='15px' fontWeight='500'>EMI Calculator</Button></Link>
                <Link to='/blog'><Button fontSize='15px' fontWeight='500'>Blog</Button></Link>
            </ButtonGroup>

            <HStack spacing='2'>
              <IconButton
                aria-label='Toggle dark mode'
                icon={colorMode === 'light' ? <BiMoon /> : <BiSun />}
                onClick={toggleColorMode}
                variant='ghost'
                size='sm'
              />
              <Link to='/contact'><Button size='sm' className='gradient-btn' borderRadius='full'>Contact</Button></Link>
              <Link to='/signup'><Button size='sm' variant='outline' borderRadius='full'>Sign up</Button></Link>
            </HStack>
          </>
          ) : (
            <HStack>
              <IconButton
                aria-label='Toggle dark mode'
                icon={colorMode === 'light' ? <BiMoon /> : <BiSun />}
                onClick={toggleColorMode}
                variant='ghost'
                size='sm'
              />
              <NavMobile />
            </HStack>
          )
        }
      </Flex>
    </chakra.header>
  )
}

export default Header