import React from 'react'
import './Smartwatches.css';
import smart1 from '../images/smart1.webp';
import nav2 from '../images/nav2.webp'
import Footer from '../basics/Footer';
import Smartwatch1 from '../product/Smartwatch1';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';


const Smartwatches = () => {

  const cartProducts=useSelector((state)=>state.cart.cartItem)
  const dispatch=useDispatch();

  const addCart=(item)=>{
    dispatch(addToCart(item))
  }

  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  return (
    <div>



          <div class="page1">
              <img src={smart1}/>

          </div>

          <div class="nav2">
              <p>Filter by <br/>Gender</p>
              <button>Men</button>
              <button>Women</button>
              <button>Unisex</button>
              <button>Couple</button>
                       
               <button class="filter"> <img src={nav2}/> SHOEW FILTER</button>
                 <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Short by :
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                       <li><a class="dropdown-item" href="#">Best seller</a></li>
                       <li><a class="dropdown-item" href="#">Popularity</a></li>
                       <li><a class="dropdown-item" href="#">New arrival</a></li>
                    </ul>
                </div>

            </div>
            <div class='row'>
            {Smartwatch1.map((item)=>(
                   <div class='col-lg-3'>
                      <div class="card" key={item.id} >
                <img src={item.img} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">{item.title}</h5>
                 <p class="card-text">{item.des}</p>
                 <p>{item.price}</p>
                 
                 {cartProducts.find(Item=>Item.id===item.id)?( 

                 <button class="btn btn-danger" onClick={()=>{ deleteCart(item)}}>Remove From Cart </button>)
                 :
                 (<button class="btn btn-danger" onClick={()=>{ addCart(item)}}>Add to Cart</button>)

} 
               </div>
              </div>
                   </div>
              ))}
              </div>


         

                 <Footer/>
    </div>
  )
}

export default Smartwatches