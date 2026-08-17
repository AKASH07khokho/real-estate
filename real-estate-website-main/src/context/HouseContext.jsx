import { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext('');

const HouseProvider = ({children}) => {

    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Select Location');
    const [countries, setCountries] = useState([]);
    const [price, setPrice] = useState('Select Price');
    const [property, setProperty] = useState('Select type');
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const allCountries = housesData.map(house => house.country);
        const uniqueCountries = [...new Set(allCountries)];
        setCountries(uniqueCountries);
    }, []);

    useEffect(() => {
        const allPropertyTypes = housesData.map(house => house.type);
        const uniquePropertyTypes = [...new Set(allPropertyTypes)];
        setProperties(uniquePropertyTypes);
    }, []);

    const searchHandler = () => {
        setIsLoading(true);

        const isDefault = (str) => {
            return str.split(' ').includes('Select');
        }
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split('- ')[1]);

        const filteredHouses = housesData.filter(house => {
            const housePrice = parseInt(house.price);

            if(isDefault(country) && isDefault(price) && isDefault(property)){
                return house;
            }
            if(!isDefault(country) && isDefault(price) && isDefault(property)){
                return house.country === country;
            }
            if(isDefault(country) && !isDefault(price) && isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            if(isDefault(country) && isDefault(price) && !isDefault(property)){
                return house.type === property;
            }
            if(!isDefault(country) && !isDefault(price) && isDefault(property)){
                return house.country === country && (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            if(!isDefault(country) && isDefault(price) && !isDefault(property)){
                return house.country === country && house.type === property;
            }
            if(isDefault(country) && !isDefault(price) && !isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice) && house.type === property;
            }
            if(house.country === country && housePrice >= minPrice && housePrice <= maxPrice && house.type === property){
                return house;
            }
        })

        setTimeout(() => {
            filteredHouses.length > 0 ? setHouses(filteredHouses) : setHouses([]);
            setIsLoading(false);
        }, 500);
    }

    return(
        <HouseContext.Provider value={{
            houses,
            country,
            setCountry,
            countries,
            price,
            setPrice,
            property,
            setProperty,
            properties,
            searchHandler,
            isLoading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;