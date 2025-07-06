import { CartState } from "../context/Context";
import { AiFillDelete } from 'react-icons/ai';
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../Pages/Shop/Shop.css";
import "./Cart.css";

const SideCart = () => {

  const navigate = useNavigate();

  const {
    state: { cart }, dispatch
  } = CartState();

  // const subtotal = cart.reduce((acc, item) => acc + Number(item.price), 0);
  const subtotal = cart.reduce((acc, item) => acc + Number(item.price.replace(/,/g, '')), 0);
  const deliveryCharges = "Free";
  const total = subtotal;

  return (
    <div className="cart-container">

      {cart.length > 0 ? (
        <> 
        <h1>Your Cart</h1>
    <AnimatePresence>

          {cart.map((item) => (
            <motion.div 
              className="cart-item"
              key={item.id}
              layoutId={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ overflow: "hidden" }}
              transition={{ opacity: { duration: 0.3 }, layout: { duration: 0.5 } }}>

              <div className="watch-image">
                <img src={item.src} alt={item.name} />
              </div>

              <div className="price-detail">
                <h3>{item.name}</h3>
                <p className='item-description-cart'>
                  Lorem elit. Laboriosam eius quod
                </p>
                <p className="size">Size: {item.selectedSize}</p>
                <p className="polo-price">{item.price} pkr</p>
              </div>
              <motion.span
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: "pointer", display: "inline-block" }}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  })
                }
              >
                <AiFillDelete style={{ fill: "grey" }} />
              </motion.span>
            </motion.div>
          ))}

      </AnimatePresence>
          <motion.div

            className="checkout-section"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ opacity: { duration: 0.5 }, layout: { duration: 0.5 } }}>

            <div className="total-section">
                {/* <p>Subtotal: {subtotal} PKR</p>
                <p>Shipping: {deliveryCharges}</p>
                <p className="Total">Total: {total} PKR</p> */}
                <p>Subtotal: {subtotal.toLocaleString()} PKR</p>
                <p className="Total">Total: {total.toLocaleString()} PKR</p>
                
            </div>
            
            <div className="payment-section">
              <p>⚠️ Online or banking transactions are currecntly un available</p>
                  
                  <button onClick={() => navigate("/checkout")}>Checkout</button>
                </div>

          
          </motion.div>
        </>
      ) : (
        <div className="emptyCart">
          <h1>Cart is empty!</h1>
          <p className='empty-cart-paragraph'>Go to the shop and add your favorite item to the cart</p>
        </div>
      )}

    </div>
  );
};

export default SideCart;
