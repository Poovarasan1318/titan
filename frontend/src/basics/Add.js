import React from 'react'
import { Link } from 'react-router-dom'
import './Add.css';

const Add = () => {
  return (
    <div>
        <div class='profile'>
           <a><Link to='/upload'><button>Add On</button></Link></a> 
        </div>
    </div>
  )
}

export default Add