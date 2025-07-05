// export const cartReducer =(state, action)=>{
//     switch(action.type) {
//         case "ADD_TO_CART":
//             return {...state,cart: [...state.cart, {...action.payload, qty: 1} ] };
//         case "REMOVE_FROM_CART":    
//             return {...state, cart:state.cart.filter((c)=> c.id !==action.payload.id)}

//         case "CLEAR_CART":
//             return {
//                 ...state,
//                 cart: [],
//             };

//         default:
//             return state;
//     }
// }


export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => {
          return !(c.id === action.payload.id && c.selectedSize === action.payload.selectedSize);
        }),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
