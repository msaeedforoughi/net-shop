import { Link } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContext";
import { useLoginContext } from "../../../contexts/LoginContext";
import ProductItem from "../../store/productItem/ProductItem";
import Heading from "../../layoutComponents/heading/Heading";
import Grid from "../../layoutComponents/grid/Grid";
import Box from "../../layoutComponents/box/Box";
import { IProductList } from "../../../types/homeProductList";

function ProductList({ title, filterFn, boxStyles }: IProductList) {
  const { products } = useProductContext();
  const { isLogin } = useLoginContext();
  return (
    <Box className={boxStyles}>
      <Heading
        heading={title}
        className="!font-extrabold !text-base md:mb-4 md:mt-0 mb-2 mt-2 ml-2"
      />
      <Grid className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {products.filter(filterFn).map((product) => (
          <Link
            key={product.id}
            to={isLogin ? `/product/${product.id}` : "/login"}
          >
            <ProductItem {...product} />
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
