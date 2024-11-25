import React from 'react'
import './Women.css';
import women1 from '../images/women1.webp';
import nav2 from '../images/nav2.webp'
import women01 from '../images/women01.webp';
import women02 from '../images/women02.webp';
import women03 from '../images/women03.jpg';
import women04 from '../images/women04.webp';
import women11 from '../images/women11.webp';
import women12 from '../images/women12.webp';
import women13 from '../images/women13.webp';
import Footer from '../basics/Footer';
import Womens from '../product/Womens';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';

const Women = () => {

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
              <img src={women1}/>

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
            
             <div class='row' >
             {Womens.map((item)=>(
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

export default Women