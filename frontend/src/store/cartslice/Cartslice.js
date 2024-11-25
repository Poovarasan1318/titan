import {createSlice} from "@reduxjs/toolkit"

const storedItems = localStorage.getItem("cartItem");
const initialState={
    cartItem:storedItems ? JSON.parse (storedItems):[]

} ;

const cart = createSlice({
    

    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{           
            const newItem = action.payload 
            const existingItem = state.cartItem.find((Item)=>Item.id === newItem.id)
            if(existingItem){

                existingItem.quantity += newItem.quantity
            }else{
                state.cartItem.push({
                    id:newItem.id,
                    img:newItem.img,
                    price:newItem.price,
                    quantity:newItem.quantity,
                    des:newItem.des,
                    title:newItem.title,
                });

            }
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem))          
        },
        deleteFromCart:(state,action)=>{
            state.cartItem = state.cartItem .filter( (Items)=>Items.id !== action.payload.id)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItem));
        },
        updateQuantity:(state,action)=>{
            const {id,quantity}=action.payload
            const itemToUpdate = state.cartItem.find(items => items.id ===id)
            if(itemToUpdate){
                itemToUpdate.quantity = quantity
            };
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
        }

    }
})

export default cart.reducer;
export const {addToCart,deleteFromCart,updateQuantity}= cart.actions