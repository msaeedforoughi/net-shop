import ProductList from "../productList/ProductList";

function NewArrivals() {
  return (
    <ProductList
      title="New Arrivals"
      filterFn={(product) => product.rating.count > 400}
      boxStyles="md:mt-8 mt-2 mx-4"
    />
  );
}

export default NewArrivals;
