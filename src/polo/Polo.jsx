import React from "react";
import "./Polo.css";
import { CartState } from "../context/Context";

function Polo() {
  const {state: { cart }, dispatch,}= CartState()

  const { state: {polos} } = CartState();
  console.log(polos);

  return (
    <div className="Polo-page">
      <h1>POLO SHIRTS</h1>
      <p className="collection-p">Latest in 2025</p>
      <div className="Polo">
        {polos.map((item) => {
          return (
            <div className="polo-item" key={item.id}>
              <img src={item.src} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="polo-price">{item.price} PKR</p>
              
              {
                cart.some(i=>i.id===item.id) ? (
                  <button className="removeCart" variant='danger' onClick={()=>dispatch({
                    
                    type:"REMOVE_FROM_CART",
                    payload:item,

                  })}>Remove</button>

                ): (
                  <button className="addCart" onClick={()=>dispatch({
                  
                    type:"ADD_TO_CART",
                    payload: item,
                  
                  })}> Add to cart</button>

                )
              }

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Polo;
