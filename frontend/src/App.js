import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navebar from './basics/Navebar';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Smartwatches from './pages/Smartwatches';
import Premiumwatches from './pages/Premiumwatches';
import Footer from './basics/Footer';
import Cart from './basics/Cart';
import Add from './basics/Add';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';




function App() {
  return (
    <div class="App">
     <BrowserRouter>
     <Navebar/>
     <Routes>   
          <Route path='/' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/smartwatches' element={<Smartwatches/>}/>
          <Route path='/premiumwatches' element={<Premiumwatches/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/update' element={<Update/>}/>
          {/* <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
          fetch(`http://localhost:5002/allproducts/${params.id}`)}/> */}
          
 <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
      fetch(`http://localhost:5002/allproducts/${params.id}`)} />
     </Routes>
     {/* <Footer/>  */}
     </BrowserRouter> 
     {/* <Update/> */}
      
     
      
      
    </div>
  );
}

export default App;
