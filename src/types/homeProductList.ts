interface IProduct {
  id: number | string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}

export interface IProductList {
  title: string;
  filterFn: (product: IProduct) => boolean;
  boxStyles: string;
}
