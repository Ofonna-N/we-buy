import Product from "./Product";

type CartItem = {
  product: Product;
  qty: number;
};

type Cart = {
  cartItems: CartItem[];
  qty: number;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

export default Cart;
export type { CartItem };
