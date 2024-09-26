import { IProduct } from "./server";

export interface SliderContentProps {
  products: IProduct[];
  activeIndex: number;
}
export interface SliderArrowProps {
  prevSlide: () => void;
  nextSlide: () => void;
}
