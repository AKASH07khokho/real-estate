import { Flex, Heading, Button, HStack, chakra, ButtonGroup, useBreakpointValue, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMoon, BiSun } from 'react-icons/bi';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue('whiteAlpha.900', 'gray.900');

  return (
    <chakra.header id="header" borderBottom='1px solid' borderColor={useColorModeValue('gray.200', 'gray.700')} bg={headerBg} position='sticky' top='0' zIndex='100' backdropFilter='blur(10px)'>
      <Flex w='100%' py='4' align='center' justify='space-between'>
        <Link to='/'>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} bgGradient='linear(to-r, pink.600, pink.400)' bgClip='text'>
            NIMI HOUSING
          </Heading>
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