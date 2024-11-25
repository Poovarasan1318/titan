import React from 'react'
import './Navebar.css';
import titanlogo from '../images/titanlogo.svg';
import { RiAccountCircleFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { BiCartDownload } from "react-icons/bi";
import { HiInbox } from "react-icons/hi2";
import {Link} from 'react-router-dom';


const Navebar = () => {
  return (
    <div>
       <div class="shadow-lg p-3 mb-5 bg-body rounded shadow">
           <div class="nav">
             <div class='hii'>
                <a><Link to='/home'><img src={titanlogo}/></Link> </a>
                <input type="search" placeholder="Search"></input>
             </div>
             <div class='icons'>
               <div class='i'>
                 <a><Link to='/add'><RiAccountCircleFill /></Link>  </a> 
                  <p>Account</p>
               </div>
               <div class='i'>
                  <CiHeart />
                  <p>Wishlist</p>
               </div>
               <div class='i'>
                  
                  <a><Link to='/cart'><BiCartDownload /></Link> </a>
                  <p>Cart</p>
               </div>
               <div class='i'>
                  <HiInbox />
                  <p>Track order</p>
               </div>
              </div>
            </div>
            </div>

          <div class='content'>
               <a><Link to='/'>Men</Link> </a>
               <a><Link to='/women'>Women</Link> </a>
               <a><Link to='/smartwatches'>Smartwatches</Link> </a>
               <a><Link to='/premiumwatches'>Premiumwatches</Link> </a>
               
          </div>     
    </div>



    
    
  )
}

export default Navebar