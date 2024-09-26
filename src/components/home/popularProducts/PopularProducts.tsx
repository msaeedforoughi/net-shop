import ProductList from "../productList/ProductList";

function PopularProducts() {
  return (
    <ProductList
      title="Popular Products"
      filterFn={(product) => product.rating.rate > 4}
      boxStyles="md:mt-28 mt-0 mx-4"
    />
  );
}

export default PopularProducts;
