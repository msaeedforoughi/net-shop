import Container from "../../layoutComponents/container/Container";
import { SliderArrowProps } from "../../../types/slider";

function Arrow({ prevSlide, nextSlide }: SliderArrowProps) {
  return (
    <Container>
      <div className="bg-red h-8 w-8">
        <span
          onClick={prevSlide}
          className="bg-transparent absolute z-[300] md:top-[350px] top-[150px] cursor-pointer text-3xl  "
        >
          {"<"}
        </span>
        <span
          onClick={nextSlide}
          className="bg-transparent absolute z-[100] md:top-[350px] top-[150px] cursor-pointer right-0 text-3xl "
        >
          {">"}
        </span>
      </div>
    </Container>
  );
}

export default Arrow;
