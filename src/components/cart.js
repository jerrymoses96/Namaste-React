import { useDispatch, useSelector } from "react-redux";
import CategoryBody from "./CategoryBody";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Dispatch an action

  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearCart());
  };
  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold text-center">cart</h1>
      <button
        className="p-2 my-5  w-25  bg-black text-white rounded-md "
        onClick={HandleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="font-mono text-2xl my-10">
          ☹️ Cart is empty.Add items to the Cart
        </h1>
      )}
      <div className="w-6/12 m-auto">
        <CategoryBody items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
