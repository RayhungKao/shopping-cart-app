import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../../slices/shoppingcartSlice";
import shoppingcartStyles from "@/styles/Shoppingcart.module.scss";

export default function Shoppingcart() {
  const shoppingcart = useSelector((state) => state.shoppingcart);
  const dispatch = useDispatch();

  const handleIncrementItemQuantity = (payload) => {
    dispatch(incrementItemQuantity(payload));
  };

  const handleDecrementItemQuantity = (payload) => {
    dispatch(decrementItemQuantity(payload));
  };

  const handleRemoveItem = (payload) => {
    dispatch(removeItem(payload));
  };

  const calculateTotalPrice = () => {
    return shoppingcart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <main className={`${shoppingcartStyles.shoppingcart} ${inter.className}`}>
        <h1>Your shopping cart</h1>
        {shoppingcart &&
          shoppingcart.map((item) => (
            <div key={item.id} className={shoppingcartStyles.item}>
              <p>Name: {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${parseInt(item.quantity) * parseInt(item.price)}</p>
              <div className={shoppingcartStyles.buttons}>
                <button
                  className={shoppingcartStyles.increment}
                  onClick={() => handleIncrementItemQuantity({ id: item.id })}
                >
                  +
                </button>
                <button
                  className={shoppingcartStyles.decrement}
                  onClick={() => handleDecrementItemQuantity({ id: item.id })}
                >
                  -
                </button>
                <button
                  className={shoppingcartStyles.remove}
                  onClick={() => handleRemoveItem({ id: item.id })}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        <h2 className={shoppingcartStyles.total}>
          Total Price: ${calculateTotalPrice()}
        </h2>
      </main>
    </>
  );
}
