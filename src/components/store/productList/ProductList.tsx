import ProductItem from ".././productItem/ProductItem";
import { useLoginContext } from "../../../contexts/LoginContext";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContext";
import { usePaginationContext } from "../../../contexts/PaginationContext";
import Grid from "../../layoutComponents/grid/Grid";
import Flex from "../../layoutComponents/flex/Flex";

function ProductList() {
  const { isLogin } = useLoginContext();
  const { filteredItems } = useProductContext();
  const { firstPostIndex, lastPostIndex } = usePaginationContext();
  const currentPosts = filteredItems.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      {currentPosts.length ? (
        <Grid className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {currentPosts.map((product) => (
            <Link
              key={product.id}
              to={isLogin ? `/product/${product.id}` : "/login"}
            >
              <ProductItem {...product} />
            </Link>
          ))}
        </Grid>
      ) : (
        <Flex className="flex justify-center items-center flex-row h-[300px]">
          <div className="md:text-5xl text-2xl font-semibold">
            No Product Found
          </div>
        </Flex>
      )}
    </>
  );
}

export default ProductList;
