import { PaginationProvider } from "../contexts/PaginationContext";
import { ProductProvider } from "../contexts/ProductContext";
import { LoginProvider } from "../contexts/LoginContext";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import { IProviders } from "../types/providers";
import { ToggleProvider } from "../contexts/ToggleContext";

function Providers({ children }: IProviders) {
  return (
    <ToggleProvider>
      <PaginationProvider>
        <ProductProvider>
          <LoginProvider>
            <ShoppingCartProvider>{children}</ShoppingCartProvider>
          </LoginProvider>
        </ProductProvider>
      </PaginationProvider>
    </ToggleProvider>
  );
}

export default Providers;
