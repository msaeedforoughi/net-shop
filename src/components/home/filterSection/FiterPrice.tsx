import { useProductContext } from "../../../contexts/ProductContext";
import { priceRanges } from "../../../constants/priceRanges";

function FilterPrice() {
  const { handleFilterPrice, selectedPriceRange } = useProductContext();
  return (
    <ul className="md:mx-3 mx-8 ">
      {priceRanges.map((price, index) => (
        <li
          key={`filters-${index}`}
          className="w-[150px] h-[40px] inline-block "
        >
          <label
            htmlFor={`price-${index}`}
            className="cursor-pointer flex items-center"
          >
            <input
              className="mr-1 w-5 h-5"
              type="checkbox"
              id={`price-${index}`}
              checked={selectedPriceRange.includes(price)}
              onChange={() => handleFilterPrice(price)}
            />

            {price}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default FilterPrice;
