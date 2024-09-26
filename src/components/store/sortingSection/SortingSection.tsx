import { useProductContext } from "../../../contexts/ProductContext";
import { sortOptions } from "../../../constants/sortOptions";

function SortingSection() {
  const { handleSortChange, selectedSort } = useProductContext();
  return (
    <div>
      {" "}
      <select
        className="ml-2"
        value={selectedSort}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleSortChange(e.target.value)
        }
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortingSection;
