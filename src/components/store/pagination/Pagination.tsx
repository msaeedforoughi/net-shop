import { usePaginationContext } from "../../../contexts/PaginationContext";
import { useProductContext } from "../../../contexts/ProductContext";
import Flex from "../../layoutComponents/flex/Flex";

function Pagination() {
  const { postPerPage, setCurrentPage } = usePaginationContext();
  const { filteredItems } = useProductContext();
  const totalPosts = filteredItems.length;
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <Flex className="flex justify-center flex-row h-[100px] w-full bg-slate-300 items-center my-8 shadow-md rounded-b-md">
      {pages.map((page, index) => (
        <button
          className="h-10 w-10 bg-white hover:bg-blue-500 mx-2"
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </Flex>
  );
}

export default Pagination;
