import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

import { bannerData } from "../data";
import BannerBg from "../assets/images/banner-bg.png";

const Banner = () => {
  return (
    <>
      <Box
        my='6'
        overflow='hidden'
        borderRadius='xl'
        position='relative'
        bgImage={`url(${BannerBg})`}
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
        minH={{ base: '400px', md: '480px' }}
      >
        {/* Dark overlay for text readability */}
        <Box
          position='absolute'
          top='0'
          left='0'
          right='0'
          bottom='0'
          bg='blackAlpha.600'
          borderRadius='xl'
        />

        {/* Content */}
        <VStack
          position='relative'
          zIndex='1'
          px={{ base: "6", md: "10" }}
          py={{ base: '10', md: "16" }}
          justify="center"
          align="left"
          h='100%'
          minH={{ base: '400px', md: '480px' }}
        >
          <Text
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight='bold'
            color='pink.300'
            textTransform='uppercase'
            letterSpacing='wider'
          >
            NIMI Housing & Property Development Pvt Ltd
          </Text>

          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            color='white'
            maxW='650px'
            lineHeight='shorter'
          >
            Find Your Perfect Land Property.
          </Heading>

          <Text fontSize={{ base: 'sm', md: 'md' }} color='gray.200' maxW='500px'>
            Discover premium, legally verified land properties in prime locations
            across Chennai. Trusted by 1000+ happy customers.
          </Text>

          <HStack pt="3" pb="6" spacing='4'>
            <Link to='/signup'>
              <Button colorScheme='pink' size={{ base: 'sm', md: 'md' }}>
                Get Started
              </Button>
            </Link>
            <Link to='/contact'>
              <Button variant='outline' color='white' borderColor='white' size={{ base: 'sm', md: 'md' }}
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>

          <HStack spacing={{ base: '2', md: '4' }} flexWrap='wrap'>
            {bannerData.map((item, index) => (
              <VStack
                key={index}
                bg="whiteAlpha.200"
                backdropFilter='blur(10px)'
                p={{ base: '3', md: '4' }}
                borderRadius="md"
                align="left"
                pr="3"
                border='1px'
                borderColor='whiteAlpha.300'
              >
                <HStack>
                  <Text fontSize={{ base: '14px', md: 'md' }} fontWeight="extrabold" mr="-2" color='white'>
                    {Object.keys(item)}
                  </Text>{" "}
                  <BiPlus style={{ color: "#ED64A6" }} />
                </HStack>
                <Text fontSize={{ base: '11px', md: 'sm' }} color='gray.300'>{Object.values(item)}</Text>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Banner;
