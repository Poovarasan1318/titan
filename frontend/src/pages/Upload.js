import React from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Upload = () => {
      
  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const img =form.img.value;
    const title = form.title.value;
    const des = form.des.value;
    const price = form.price.value;
    const quantity = 1;

    if(img === "" || title === "" || des === "" || price === ""){
        toast.warn("Fill all the fields");
    }
    const prdObj = {
        img,title,des,price,quantity
    };console.log(prdObj);

    fetch("http://localhost:5002/upload",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(prdObj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        toast.success("Product Added Successfully")
        form.reset();
        window.location.href = "/update";
    });
}
  return (
    <div>

      <div class='card up1'>
        <h3>Upload Products</h3>
      <form onSubmit={handleSubmit}>
        <label value="img">Image</label><br/>
        <input 
        type='text'
        name='img'
        id='img'
        /><br/>
        <label value="title">Title</label><br/>
        <input 
        type='text'
        name='title'
        id='title'
        /><br/>
        <label value="des">Description</label><br/>
        <input 
        type='text'
        name='des'
        id='des'
        /><br/>
        <label value="price">Price</label><br/>
        <input 
        type='number'
        name='price'
        id='price'
        /><br/><br/>
        <button type="submit" class='btn btn-success'>Upload</button>
      </form>
      </div>
        
    </div>

  )
}

export default Upload