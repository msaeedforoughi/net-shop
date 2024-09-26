import { createContext, useContext, useState, useEffect } from "react";
import { IProduct } from "../types/server";
import { getProducts } from "../services/api";
import { IProductContext } from "../types/productContext";

// Create context

const ProductContext = createContext({} as IProductContext);

// Create usecontext hook

export const useProductContext = () => {
  return useContext(ProductContext);
};

// Context provider

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>(category);
  const [productId, setProductId] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState(products);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Useeffects

  useEffect(() => {
    getProducts().then((result) => setProducts(result));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [
    selectedFilters,
    selectedPriceRange,
    products,
    selectedSort,
    searchQuery,
  ]);
  //console.log(searchQuery)

  // Check category

  const isProductInCategory = (product: IProduct, category: string) => {
    return product.category === category;
  };

  // Check price range

  const isProductInPriceRange = (product: IProduct, priceRange: string) => {
    switch (priceRange) {
      case "under 100$":
        return product.price < 100;
      case "100$-200$":
        return product.price >= 100 && product.price < 200;
      case "200$-500$":
        return product.price >= 200 && product.price < 500;
      case "over 500$":
        return product.price >= 500;
      default:
        return true;
    }
  };

  // Check sorting

  const applySorting = (products: IProduct[], sortOption: string) => {
    switch (sortOption) {
      case "priceAsc":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceDesc":
        return [...products].sort((a, b) => b.price - a.price);
      case "nameAsc":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "nameDesc":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  // All products by (category, pricce range, sorting, search)

  const filterProducts = () => {
    let filteredItems = products;

    // Filter by category
    if (selectedFilters.length > 0) {
      filteredItems = filteredItems.filter((product) =>
        selectedFilters.some((category) =>
          isProductInCategory(product, category)
        )
      );
    }

    // Filter by price range
    if (selectedPriceRange.length > 0) {
      filteredItems = filteredItems.filter((product) =>
        selectedPriceRange.some((priceRange) =>
          isProductInPriceRange(product, priceRange)
        )
      );
    }

    // Apply sorting logic
    if (selectedSort) {
      filteredItems = applySorting(filteredItems, selectedSort);
    }

    // Apply searching system
    if (searchQuery.length > 0)
      filteredItems = filteredItems.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    setFilteredItems(filteredItems);
  };

  /////////////////////////////////////////////////////////////////////////////////////

  const handleFilterChange = (filters: string[], priceRange: string[]) => {
    setSelectedFilters(filters);
    setSelectedPriceRange(priceRange);
    filterProducts();
  };

  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    filterProducts();
  };

  /////////////////////////////////////////////////////////////////////////////////////

  const handleFilterCategory = (category: string) => {
    if (selectedFilters.includes(category)) {
      let filters = selectedFilters.filter((filter) => filter !== category);
      setSelectedFilters(filters);
      handleFilterChange(filters, selectedPriceRange);
    } else {
      setSelectedFilters([...selectedFilters, category]);
      handleFilterChange([...selectedFilters, category], selectedPriceRange);
    }
  };

  const handleFilterPrice = (priceRange: string) => {
    if (selectedPriceRange.includes(priceRange)) {
      let priceRanges = selectedPriceRange.filter(
        (range) => range !== priceRange
      );
      setSelectedPriceRange(priceRanges);
      handleFilterChange(selectedFilters, priceRanges);
    } else {
      setSelectedPriceRange([...selectedPriceRange, priceRange]);
      handleFilterChange(selectedFilters, [...selectedPriceRange, priceRange]);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredItems,
        selectedFilters,
        selectedPriceRange,
        selectedSort,
        handleFilterChange,
        handleSortChange,
        filterProducts,
        handleFilterCategory,
        handleFilterPrice,
        setProductCategory,
        productCategory,
        setProductId,
        productId,
        setCategory,
        category,
        searchQuery,
        setSearchQuery,
        setFilteredItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
