import Container from "../../components/layoutComponents/container/Container";
import FilterButtons from "../../components/home/filterSection/FilterSystem";
import ProductList from "../../components/store/productList/ProductList";
import Pagination from "../../components/store/pagination/Pagination";
import { IoFilter } from "react-icons/io5";
import { useToggleContext } from "../../contexts/ToggleContext";
import Flex from "../../components/layoutComponents/flex/Flex";
import SortingSection from "../../components/store/sortingSection/SortingSection";
import SearchingSection from "../../components/store/searchingSection/SearchingSection";

function Store() {
  const { show, setShow } = useToggleContext();

  return (
    <div>
      <Container>
        <div className="bg-gray-100">
          <Flex className="flex flex-col justify-center items-center mt-5 bg-slate-200 h-[60px]  font-bold rounded-t-md">
            Products
          </Flex>

          <div className="flex  pb-6 x-6 ">
            <div
              className={`md:block x-5  ${
                show ? "md:relative absolute " : "hidden"
              }`}
            >
              <FilterButtons />
            </div>

            <div className="mx-5 w-full">
              <Flex className="flex items-center flex-row justify-between bg-slate-900 h-[40px] my-4 border-gray-800 border-t-2 border-b-2">
                <SortingSection />

                <SearchingSection />
                <span
                  className={`${
                    show ? "hidden" : ""
                  } h-[20px] w-[20px]  mr-3  md:hidden opacity-30 bg-slate-800 text-gray-300`}
                  onClick={() => setShow(!show)}
                >
                  <IoFilter size={24} />
                </span>
              </Flex>
              <ProductList />
            </div>
          </div>
          <Pagination />
        </div>
      </Container>
    </div>
  );
}

export default Store;
