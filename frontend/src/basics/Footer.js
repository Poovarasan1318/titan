import React from 'react'
import './Footer.css';
import { FaMedal } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div class='service'>
            <div class='serv'>
               <FaMedal />
               <div class='line'>
                 <p>100% ORIGINAL</p>
              </div>
            </div>
            <div class='serv'>
               <GiCardExchange />
               <div class='line'>
                  <p>7 DAY RETURN</p>
             </div>
            </div>
            <div class='serv'>
               <FaShippingFast />
                 <div class='line'>
                     <p>FREE SHIPPING</p>
                 </div>
            </div>
        </div>

        <div class='login'>
              <h2>LOGIN FOR THE BEST EXPERIENCE</h2>
              <button>LOGIN NOW</button>
             <p> <a><Link to='/Signin'>Create an account</Link> </a></p>
            </div>
    </div>
  )
}

export default Footer