import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState:[],  // putting cart Item here
    reducers:{
        add: (state, actions)=>{ state.push(actions.payload) },   //add item to the cart

        //remove an item from the cart
        remove: (state,actions)=>{ return state.filter((item)=> item.id !== actions.payload) },

        clearCart: (state) => { return [] },
    }
});

export const { add, remove, clearCart} = CartSlice.actions;
export default CartSlice.reducer;