export interface IShoppingCartProvider {
  children: React.ReactNode;
}

export interface ICartItem {
  id: number;
  qty: number;
}

export interface IShoppingCartContext {
  cartQty: number;
  cartItems: ICartItem[];
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
}
