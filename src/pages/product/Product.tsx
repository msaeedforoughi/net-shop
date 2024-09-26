import { useParams } from "react-router-dom";
import Container from "../../components/layoutComponents/container/Container";
import Button from "../../components/layoutComponents/button/Button";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/server";
import { getProduct } from "../../services/api";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import RelatedProducts from "../../components/product/relatedProducts/RelatedProducts";
import Image from "../../components/layoutComponents/image/Image";
import Heading from "../../components/layoutComponents/heading/Heading";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
    getProductQty,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
      window.scrollTo(0, 0); 
    });
  }, [params.id]);

  //  console.log(params.id);
  return (
    <div>
      <Container>
        <div className="bg-gray-100 pb-12">
          <div className="flex flex-col md:flex-row-reverse md:h-96 h-[600px] shadow mt-4 rounded-md ">
            <div className="md:w-4/12 w-full bg-gray-300 flex justify-center items-center p-4">
              <Image
                imageSrc={product?.image}
                className="w-full bject-cover rounded "
              />
            </div>
            <div className="md:w-8/12 w-full md:h-96 h-[370px] flex md:flex-col flex-col-reverse bg-white">
              <div className="md:h-60 h-[250px] p-4">
                <Heading
                  heading={product?.title}
                  className="text-right font-bold !text-base"
                />
                <div>
                  <p className="text-right font-semibold text-xl">
                    {product?.price}$
                  </p>
                  <p className="text-right md:text-base text-sm line-clamp-6">
                    {product?.description}
                  </p>
                </div>
              </div>
              <div className="md:h-36  h-[120px] flex justify-center items-center">
                <div className="w-[200px]">
                  {getProductQty(parseInt(params.id as string)) == 0 ? (
                    <Button
                      onClick={() => {
                        handleIncreaseProductQty(parseInt(params.id as string));
                      }}
                      className="mt-2 w-full !py-3 opacity-70"
                      variant="primary"
                    >
                      Add
                    </Button>
                  ) : (
                    <>
                      <div className="grid grid-cols-3">
                        <Button
                          onClick={() => {
                            handleIncreaseProductQty(
                              parseInt(params.id as string)
                            );
                          }}
                          className="mt-2 w-full opacity-70"
                          variant="primary"
                        >
                          +
                        </Button>
                        <span className="flex justify-center items-center">
                          {getProductQty(parseInt(params.id as string))}{" "}
                        </span>
                        <Button
                          onClick={() =>
                            handleDecreaseProductQty(
                              parseInt(params.id as string)
                            )
                          }
                          className="mt-2 w-full opacity-70"
                          variant="danger"
                        >
                          -
                        </Button>
                      </div>
                      <Button
                        onClick={() =>
                          handleRemoveProduct(parseInt(params.id as string))
                        }
                        className="mt-2 w-full !py-3 opacity-70"
                        variant="danger"
                      >
                        Remove
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </Container>
    </div>
  );
}

export default Product;
