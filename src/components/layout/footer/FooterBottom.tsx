import { items } from "./FooterBottomItems";
import Flex from "../../layoutComponents/flex/Flex";

function FooterBottom() {
  return (
    <Flex className="flex flex-col items-center sm:flex-row justify-between text-center max-w-[1240px] px-2 py-6 mx-auto text-gray-500">
      <p className="py-4">@{new Date().getFullYear()} All rights reserved</p>
      <div className="flex  sm:w-[300] pt-4 text-2xl ">
        {items.map((x, index) => {
          return (
            <span
              key={index}
              className="hover:text-white cursor-pointer flex justify-between"
            >
              {x.icon}
            </span>
          );
        })}
      </div>
    </Flex>
  );
}

export default FooterBottom;
