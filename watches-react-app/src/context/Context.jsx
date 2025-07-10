import React, { useContext,useReducer } from 'react';
import { createContext } from 'react';
import data from '../Pages/ImagesData.json';
import { cartReducer } from './Reducer';


export const Cart =  createContext();

const Context = ({ children }) => {

    const polos=data.polos;
    // console.log(polos);
    const product = polos.map((item)=>({
        ...item
    }));

    const [state , dispatch] =useReducer(cartReducer,{
        polos:polos,
        cart:[]
    })
    
    return (
    <Cart.Provider value={{ state, dispatch }}> {children} </Cart.Provider>
)
}

export default Context;

export const CartState=()=>{
    return useContext(Cart)
}