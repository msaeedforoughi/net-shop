import { useProductContext } from "../../../contexts/ProductContext";

function SearchingSection() {
  const { searchQuery, setSearchQuery } = useProductContext();
  return (
    <div>
      {" "}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="text-black md:mr-2 placeholder:mx-4"
      />
    </div>
  );
}

export default SearchingSection;
