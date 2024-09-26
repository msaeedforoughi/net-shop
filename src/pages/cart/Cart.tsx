import Button from "../../components/layoutComponents/button/Button";
import CartItem from "../../components/cart/cartItem/CartItem";
import Container from "../../components/layoutComponents/container/Container";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useProductContext } from "../../contexts/ProductContext";
import Flex from "../../components/layoutComponents/flex/Flex";

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const { products } = useProductContext();
  let totalPrice;
  totalPrice = cartItems.reduce((acc, item) => {
    const product = products.find((n) => parseInt(n.id) === item.id);
    if (product) {
      return acc + product.price * item.qty;
    }
    return acc;
  }, 0);
  const discount = 0.12 * totalPrice;
  const finalPrice = totalPrice - discount;

  return (
    <div>
      <Container>
        <div>
          {cartItems.map((item) => {
            const product = products.find((n) => parseInt(n.id) === item.id);
            console.log(product);
            if (product) {
              const total = product.price * item.qty;

              console.log(total);
              return <CartItem {...item} total={total} price={product.price} />;
            }
            return null;
          })}
        </div>
        {totalPrice ? (
          <>
            <div className="bg-gray-200 rounded p-6">
              <p className="text-right">
                total price :{totalPrice.toFixed(2)}$
              </p>
              <p className="text-right">12% discount :{discount.toFixed(2)}$</p>
              <p className="text-right">
                final price :{finalPrice.toFixed(2)}$
              </p>
            </div>
            <Button className="mr-2 mt-2 opacity-70" variant="success">
              Order
            </Button>
          </>
        ) : (
          <Flex className="flex justify-center items-center flex-row h-[300px]">
            <p className="text-5xl font-semibold"> cart is empty </p>
          </Flex>
        )}
      </Container>
    </div>
  );
}
export default Cart;
