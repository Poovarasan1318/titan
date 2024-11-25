import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice';
import './Cart.css';



const Cart = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItem);
    const dispatch=useDispatch();

const deleteCart=(item)=>{
    dispatch(deleteFromCart(item));

}  

const incrementcart=(id,quantity)=>{
     dispatch(updateQuantity({id,quantity:quantity+1}))
}

const decrementcart=(id,quantity)=>{
  if(quantity>1){
     dispatch(updateQuantity({id,quantity:quantity-1}))
  }
}




  return (
    <div>
        {/* <div class="card"> */}
        <div class=' cartpdt'>
            <div class="row">
          {cartProducts.map((item)=>(
            <div class='col-lg-3'>
            <div class='cart' key={item.id}>
                <div class="card pic " >
                    <img src={item.img}/>
                      <div class="card-body abt">
                         <h5 class="card-title">{item.title}</h5>
                         <p class="card-text">{item.des}</p>
                         <p>{item.price}</p>
                        <div class='but mb-2'>
                         <button class='btn btn-danger me-2' onClick={()=>{decrementcart(item.id,item.quantity)}}>-</button>
                         {item.quantity}
                         <button  class='btn btn-success ms-2' onClick={()=>{incrementcart(item.id,item.quantity)}}>+</button>      
                         </div>

                         <div class="dtl1">
                          <button class="btn btn-danger" onClick={()=>{deleteCart(item)}
                          }>Delete</button>
                          </div>

                      </div>
                 </div> 
             </div> 
             </div> 
             
             
)
)} 
          </div>
          </div>
             </div>    
        // </div>       
) }     
        
      
  


export default Cart