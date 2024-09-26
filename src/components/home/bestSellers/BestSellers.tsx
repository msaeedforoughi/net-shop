import ProductList from "../productList/ProductList";

function BestSeller() {
  return (
    <ProductList
      title="Best Sellers"
      filterFn={(product) => product.rating.count < 200}
      boxStyles="md:mt-8 mt-2 mx-4"
    />
  );
}

export default BestSeller;
