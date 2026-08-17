import { Stack, VStack, Heading, Text, Box, HStack, Image, Badge, Button, SimpleGrid, Icon, useColorModeValue, Divider } from "@chakra-ui/react"
import { BiArea, BiMap, BiPhone, BiShareAlt, BiCheckCircle } from "react-icons/bi";
import { FaWhatsapp } from 'react-icons/fa';

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { HouseContext } from "../../context/HouseContext";
import Form from "./Form";

const HouseDetails = () => {
  const { propertyId } = useParams();
  const { houses } = useContext(HouseContext);
  const searchedHouse = houses.find(house => house.id == propertyId);
  const cardBg = useColorModeValue('white', 'gray.800');

  if (!searchedHouse) {
    return <Heading my='10' textAlign='center'>Property not found</Heading>;
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919047335599?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(searchedHouse.name)}%20-%20${encodeURIComponent(searchedHouse.address)}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: searchedHouse.name,
        text: `Check out this property: ${searchedHouse.name} - ₹${searchedHouse.priceDisplay}`,
        url: window.location.href,
      });
    }
  };

  return (
    <>
      {/* Header section */}
      <Stack direction={{ base: 'column', md: 'row' }} justify='space-between' align={{ md: 'center' }} my='28px' spacing='4'>
        <Box>
          <Heading fontSize='24px'>{searchedHouse.name}</Heading>
          <HStack mt='1'>
            <Icon as={BiMap} color='gray.400' />
            <Text fontSize='14px' color='gray.500'>{searchedHouse.address}</Text>
          </HStack>
        </Box>

        <HStack flexWrap='wrap'>
          <Badge colorScheme='pink' borderRadius='full' px='3' py='1'>{searchedHouse.type}</Badge>
          <Badge colorScheme='green' borderRadius='full' px='3' py='1'>{searchedHouse.approval}</Badge>
          <Badge colorScheme='purple' borderRadius='full' px='3' py='1'>{searchedHouse.country}</Badge>
        </HStack>

        <Text fontWeight="extrabold" fontSize="24px" color="pink.500">
          ₹ {searchedHouse.priceDisplay || searchedHouse.price}
        </Text>
      </Stack>

      <Stack direction={{ base: 'column', lg: 'row' }} gap='6' align='flex-start'>
        <VStack align='left' flex='1' spacing='5'>
          {/* Main Image */}
          <Box borderRadius='xl' overflow='hidden'>
            <Image src={searchedHouse.imageLg} alt={searchedHouse.name} w='100%' />
          </Box>

          {/* Quick Info Cards */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing='3'>
            <Box bg={cardBg} p='4' borderRadius='lg' boxShadow='sm' textAlign='center'>
              <Text fontSize='xs' color='gray.500'>Area</Text>
              <Text fontWeight='bold' fontSize='sm'>{searchedHouse.surface}</Text>
            </Box>
            <Box bg={cardBg} p='4' borderRadius='lg' boxShadow='sm' textAlign='center'>
              <Text fontSize='xs' color='gray.500'>Facing</Text>
              <Text fontWeight='bold' fontSize='sm'>{searchedHouse.facing || 'N/A'}</Text>
            </Box>
            <Box bg={cardBg} p='4' borderRadius='lg' boxShadow='sm' textAlign='center'>
              <Text fontSize='xs' color='gray.500'>Status</Text>
              <Text fontWeight='bold' fontSize='sm' color='green.500'>{searchedHouse.status || 'Ready'}</Text>
            </Box>
            <Box bg={cardBg} p='4' borderRadius='lg' boxShadow='sm' textAlign='center'>
              <Text fontSize='xs' color='gray.500'>Year</Text>
              <Text fontWeight='bold' fontSize='sm'>{searchedHouse.year}</Text>
            </Box>
          </SimpleGrid>

          {/* Description */}
          <Box>
            <Heading size='sm' mb='2'>About this Property</Heading>
            <Text fontSize='14px' color='gray.600' lineHeight='tall'>{searchedHouse.description}</Text>
          </Box>

          {/* Amenities */}
          {searchedHouse.amenities && (
            <Box>
              <Heading size='sm' mb='3'>Amenities & Highlights</Heading>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing='2'>
                {searchedHouse.amenities.map((amenity, i) => (
                  <HStack key={i} bg={cardBg} p='2' borderRadius='md' boxShadow='sm'>
                    <Icon as={BiCheckCircle} color='green.400' boxSize='4' />
                    <Text fontSize='xs'>{amenity}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* Google Maps */}
          <Box>
            <Heading size='sm' mb='3'>Location on Map</Heading>
            <Box borderRadius='xl' overflow='hidden' h='300px'>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(searchedHouse.address)}`}
                allowFullScreen
              />
            </Box>
          </Box>

          {/* Action Buttons */}
          <HStack spacing='3' flexWrap='wrap'>
            <Button leftIcon={<FaWhatsapp />} colorScheme='green' onClick={handleWhatsApp} borderRadius='full'>
              WhatsApp
            </Button>
            <Button leftIcon={<BiPhone />} colorScheme='blue' onClick={() => window.open('tel:+919047335599')} borderRadius='full'>
              Call Now
            </Button>
            <Button leftIcon={<BiShareAlt />} variant='outline' onClick={handleShare} borderRadius='full'>
              Share
            </Button>
          </HStack>
        </VStack>

        {/* Contact Form */}
        <Form searchedHouse={searchedHouse} />
      </Stack>
    </>
  )
}

export default HouseDetails;