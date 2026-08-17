import {
  VStack,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
  Badge,
  Box,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiArea, BiMap } from "react-icons/bi";

const HouseItem = ({ house }) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex justify='center' align='center'>
      <Stack
        justify='center'
        width="320px"
        bg={cardBg}
        boxShadow="lg"
        borderRadius="xl"
        overflow='hidden'
        className='hover-lift'
        transition='all 0.3s ease'
      >
        <Box position='relative'>
          <Image src={house.imageLg} h='180' w='100%' objectFit='cover' alt={house.name} />
          <Badge
            position='absolute'
            top='3'
            left='3'
            colorScheme='pink'
            borderRadius='full'
            px='2'
            fontSize='xs'
          >
            {house.type}
          </Badge>
          {house.approval && (
            <Badge
              position='absolute'
              top='3'
              right='3'
              colorScheme='green'
              borderRadius='full'
              px='2'
              fontSize='xs'
            >
              {house.approval}
            </Badge>
          )}
        </Box>

        <VStack p='4' align='left' spacing='2'>
          <Text fontWeight="extrabold" fontSize="20px" color="pink.500">
            ₹ {house.priceDisplay || house.price}
          </Text>

          <Heading fontSize="18px" letterSpacing="tight" noOfLines={1}>
            {house.name}
          </Heading>

          <HStack>
            <Icon as={BiMap} color='gray.400' boxSize='3.5' />
            <Text fontSize="12px" color="gray.500" noOfLines={1}>
              {house.address}
            </Text>
          </HStack>

          <HStack spacing="4" pt='1'>
            <HStack>
              <BiArea style={{ color: "#D53F8C" }} />
              <Text fontSize="12px" fontWeight='500'>{house.surface}</Text>
            </HStack>
            {house.facing && (
              <Text fontSize="11px" color='gray.500' bg='gray.100' px='2' borderRadius='full'>
                {house.facing} Facing
              </Text>
            )}
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default HouseItem;
