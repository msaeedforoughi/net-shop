import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../home/productList/ProductList";
import { getProduct } from "../../../services/api";

function RelatedProducts() {
  const params = useParams<{ id: string }>();
  const [filteredCategory, setFilteredCategory] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setFilteredCategory(data.category);
    });
  }, [params.id]);

  return (
    <ProductList
      title="Related Products"
      filterFn={(product) =>
        product.category === filteredCategory && product.id !== params.id
      }
      boxStyles="md:mt-8 mt-32 mx-4"
    />
  );
}

export default RelatedProducts;
