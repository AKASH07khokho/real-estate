import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PriceFilter = () => {
  const { setPrice } = useContext(HouseContext);

  const prices = [
    { value: "1000000 - 2000000", label: "₹ 10L - 20L" },
    { value: "2000000 - 4000000", label: "₹ 20L - 40L" },
    { value: "4000000 - 6000000", label: "₹ 40L - 60L" },
    { value: "6000000 - 10000000", label: "₹ 60L - 1 Crore" },
    { value: "10000000 - 50000000", label: "₹ 1 Crore+" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Select placeholder="Select Price" onChange={priceHandler}>
      {prices.map((price, index) =>
        <option key={index} value={price.value}>{price.label}</option>
      )}
    </Select>
  );
};

export default PriceFilter;