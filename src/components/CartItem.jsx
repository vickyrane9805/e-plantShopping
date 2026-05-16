import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              {/* Image */}
              <img src={item.image} alt={item.name} width="100" />

              {/* Name & Price */}
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>

              {/* Quantity Controls */}
              <div>
                <button onClick={() => dispatch(decreaseQty(item.id))}>
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button onClick={() => dispatch(increaseQty(item.id))}>
                  +
                </button>
              </div>

              {/* Total per item */}
              <p>Total: ₹{item.price * item.quantity}</p>

              {/* Delete Button */}
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Delete
              </button>
            </div>
          ))}

          {/* Total Amount */}
          <h2>Total Cart Amount: ₹{totalAmount}</h2>

          {/* Checkout Button */}
          <button onClick={() => alert("Coming Soon 🚀")}>
            Checkout
          </button>

          <br /><br />

          {/* Continue Shopping */}
          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartItem;