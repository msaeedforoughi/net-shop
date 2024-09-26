import { useEffect, useState } from "react";
import Button from "../../layoutComponents/button/Button";
import { IProduct } from "../../../types/server";
import { getProduct } from "../../../services/api";
import { useShoppingCartContext } from "../../../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import { ICartItem } from "../../../types/cartItem";
import { useProductContext } from "../../../contexts/ProductContext";
import Image from "../../layoutComponents/image/Image";
import Flex from "../../layoutComponents/flex/Flex";

function CartItem({ id, qty, total, price }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const { products } = useProductContext();
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  },[]);

  return (
    <Flex className="flex md:flex-row-reverse flex-col mt-2 border-b pb-2">
      <Flex className="flex justify-center">
        <Link to={`/product/${id}`}>
          <Image imageSrc={product?.image} className="rounded w-28" />
        </Link>
      </Flex>
      <div className="mr-4">
        <Flex className="flex justify-center ">
          <h3 className="md:text-right md:text-base text-sm text-center">
            {product?.title}
          </h3>
        </Flex>
        <div className="mt-2 flex flex-row-reverse md:justify-start justify-center ">
          {products.map((product) => parseInt(product.id) === id)}
          <Button
            onClick={() => handleRemoveProduct(id)}
            className="md:mx-2 mx-1 opacity-70"
            variant="danger"
          >
            remove
          </Button>
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            className="opacity-70"
            variant="primary"
          >
            +
          </Button>
          <Flex className="flex ">
            <div className="md:mx-3 mx-1 w-8 text-center">{qty}</div>
          </Flex>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            className="opacity-70"
            variant="primary"
          >
            -
          </Button>
          <span className="md:mr-24 mr-12 w-5 text-center">{price}</span>
          <span className="md:mr-24 mr-24 w-5 text-center">
            {total.toFixed(2)}$
          </span>
        </div>
      </div>
    </Flex>
  );
}
export default CartItem;
