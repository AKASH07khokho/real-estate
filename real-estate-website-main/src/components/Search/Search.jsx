import { Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { useContext } from "react";
import { HouseContext } from '../../context/HouseContext';
import { BiSearch } from 'react-icons/bi';

import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";

const Search = () => {
  const { searchHandler } = useContext(HouseContext);
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex my='6' direction='column' borderRadius='xl' bg={cardBg} boxShadow='lg' p='6'>
      <Heading py='2' size={{ base: 'sm', md: 'md' }}>
        🔍 Search Land Properties
      </Heading>

      <Flex gap={{ base: 3, md: 2 }} direction={{ base: 'column', md: 'row' }} borderRadius='30' align='center'>
        <LocationFilter />
        <PropertyTypeFilter />
        <PriceFilter />
        <Button
          onClick={searchHandler}
          className='gradient-btn'
          borderRadius='full'
          px='8'
          leftIcon={<BiSearch />}
        >
          Search
        </Button>
      </Flex>
    </Flex>
  )
}

export default Search