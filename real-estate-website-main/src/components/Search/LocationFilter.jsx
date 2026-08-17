import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {
  const { setCountry, countries } = useContext(HouseContext);

  const locationHandler = (event) => {
    setCountry(event.target.value);
  }

  return (
    <Select placeholder='Select Location' onChange={locationHandler}>
      {
        countries.map((loc, index) =>
          <option key={index}>{loc}</option>
        )
      }
    </Select>
  );
};

export default LocationFilter;