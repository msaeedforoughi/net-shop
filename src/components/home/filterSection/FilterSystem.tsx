import FilterCategory from "./FilterCategory";
import FilterPrice from "./FiterPrice";
import Button from "../../layoutComponents/button/Button";
import { useToggleContext } from "../../../contexts/ToggleContext";
import { MdClose } from "react-icons/md";
import Flex from "../../layoutComponents/flex/Flex";
import Container from "../../layoutComponents/container/Container";
function FilterButtons() {
  const { show, setShow } = useToggleContext();

  return (
    <Container>
      <div
        className={`md:w-[200px] w-full md:h-[400px] h-[300px] relative z-[100] bg-white md:ml-5 md:mt-5 rounded-md shadow-lg ${
          show ? "block " : "hidden md:block"
        } `}
      >
        <Button onClick={() => setShow(!show)} className="md:hidden">
          <MdClose size={24} />
        </Button>

        <Flex className="flex md:flex-col py-12 px-4">
          <div className="w-1/2  ">
            <FilterCategory />
          </div>
          <div className="w-1/2  ">
            <FilterPrice />
          </div>
        </Flex>
      </div>
    </Container>
  );
}

export default FilterButtons;
