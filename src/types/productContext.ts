import { IProduct } from "../types/server";

export interface IProductContext {
  products: IProduct[];
  filteredItems: IProduct[];
  selectedFilters: string[];
  selectedPriceRange: string[];
  selectedSort: string;
  handleFilterChange: (filters: string[], priceRange: string[]) => void;
  handleSortChange: (sortOption: string) => void;
  filterProducts: () => void;
  handleFilterCategory: (category: string) => void;
  handleFilterPrice: (priceRange: string) => void;
  setProductCategory: React.Dispatch<React.SetStateAction<string>>;
  productCategory: string;
  setProductId: React.Dispatch<React.SetStateAction<string>>;
  productId: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setFilteredItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
