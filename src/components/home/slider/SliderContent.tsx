import Container from "../../layoutComponents/container/Container";
import { SliderContentProps } from "../../../types/slider";
import Image from "../../layoutComponents/image/Image";

function SliderContent({ products, activeIndex }: SliderContentProps) {
  return (
    <Container>
      <div className="md:h-[700px] h-[300px] md:w-full w-[100%]">
        <div className="relative h-full w-full">
          {products.map((item, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "inline-block " : "hidden"
              } `}
            >
              <Image
                imageSrc={item.image}
                className="h-full w-full absolute object-cover"
              />
              <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                <div className="bg-black bg-opacity-50 p-4 md:h-[200px] h-[110px] w-full absolute md:bottom-10 bottom-1 ">
                  <h1 className="text-white font-extrabold md:text-xl text-sm line-clamp-1">
                    {item.title}
                  </h1>
                  <p className="text-white font-normal md:text-lg text-xs line-clamp-3 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SliderContent;
