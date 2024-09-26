import { IProduct } from "../../../types/server";
import Rating from "./rating/Rating";
import Image from "../../layoutComponents/image/Image";
import Flex from "../../layoutComponents/flex/Flex";
type TProductItem = IProduct;

function ProductItem({
  title,
  price,
  description,
  image,
  rating,
}: TProductItem) {
  return (
    <div className="bg-white shadow-2xl drop-shadow-2xl">
      <Image imageSrc={image} className="rounded-t" />
      <Flex className="flex items-center flex-row justify-between px-4 mt-2">
        <h3 className="line-clamp-1 font-bold w-52">{title}</h3>
        <span className="font-bold">{price}$</span>
      </Flex>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-left text-gray-500">{description}</p>
      </div>
      <div className="px-4 mt-1 pb-2 flex">
        <Rating rate={rating.rate} />
        <p className="px-4 text-[15px] text-gray-500">{rating.rate}</p>
      </div>
    </div>
  );
}
export default ProductItem;
