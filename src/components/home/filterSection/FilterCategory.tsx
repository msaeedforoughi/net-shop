import { useProductContext } from "../../../contexts/ProductContext";
import { filterCategory } from "../../../constants/filterCategory";

function FilterCategory() {
  const { handleFilterCategory, selectedFilters } = useProductContext();
  return (
    <ul className="md:mx-3 mx-8">
      {filterCategory.map((category, index) => (
        <li
          key={`filters-${index}`}
          className="w-[150px] h-[40px] inline-block "
        >
          <label
            htmlFor={`category-${index}`}
            className="cursor-pointer flex items-center"
          >
            <input
              className="mr-1 w-5 h-5 "
              type="checkbox"
              id={`category-${index}`}
              checked={selectedFilters.includes(category)}
              onChange={() => handleFilterCategory(category)}
            />

            {category}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;
