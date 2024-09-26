import { useEffect, useState } from "react";
import { useProductContext } from "../../../contexts/ProductContext";
import SliderContent from "./SliderContent";
import Container from "../../layoutComponents/container/Container";
import Arrow from "./Arrow";

function Slider() {
  const { products } = useProductContext();
  const len = products.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);
  return (
    <div>
      <Container>
        <div className="relative">
          <SliderContent products={products} activeIndex={activeIndex} />
          <Arrow
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
        </div>
      </Container>
    </div>
  );
}

export default Slider;
