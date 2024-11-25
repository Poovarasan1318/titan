import { toast } from 'react-toastify'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Update = () => {

    const [productData,setProductData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5002/watches`)
        .then((res)=>res.json())
        .then((data)=>setProductData(data));
    },[]);
    const deleteProduct = (id) => {
      fetch(`http://localhost:5002/watch/${id}`,{
          method: "DELETE",
  })
  .then((res)=>res.json())
  .then((data)=>{
      toast.success("Product deleted Successfully");
      setProductData((prevProductData)=>
      prevProductData.filter((item)=>item._id !== id))
  })
  }
   
  return (
    <div>
      
           
         <h4>Updated Products</h4>
               {productData.map((item)=>(
                 <div class="card mb-3" key={item._id} >
                 <div class="row g-0">
                   <div class="col-md-4 upim">
                        <img src={item.img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                         <h5 class="card-title">{item.title}</h5>
                         <p class="card-text">{item.des}</p>
                         <p class="card-text">Rs:{item.price}</p>
                          
                     <button class='btn btn-danger' onClick={()=>{deleteProduct(item._id)}}>Delete</button>
                     <Link to={`/edit/${item._id}`}><button class='btn btn-warning '>Edit</button></Link>

                 </div>
                </div>
               </div>
         </div>))}
     </div>
  )
}

export default Update