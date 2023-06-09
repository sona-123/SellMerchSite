import  { useEffect, useState } from "react";
import Card from "./Card"
import Base from "./Base";
import img from "../icon.png"
import { loadCart ,removeItemFromCart} from "./helper/CartHelper";
import Imagehelper from "./helper/Imagehelper";
import "../styles/cart.css"
import { Link, Navigate } from "react-router-dom";
import StripeCheckout from "./StripeCheckout";
const Cart=()=>{
const [products ,setProducts]=useState([])
const [reload,setReload]=useState(false)
const [success, setSuccess] =useState(false)
//method which loads up everything in the product
useEffect(()=>{
    //setproduct updating the states
setProducts(loadCart());
},[reload])
const loadAllProducts=()=>{
    return (
      <div className="grid-collection-cart">
        <h4>Your cart is ready to checkout</h4>
       
      {products.map((prod,index)=>{
                return (
                    <div key={index} >
                        
                        <div   className="cart-product">
                        
                      
                        <div className="image-container">
                        <Imagehelper prod={prod}/>
                        
                        </div>
                       <div className="container">
                       <div className="name">
                              <h1> {prod.name}</h1>
                      
                           </div>
                           
                           <button className='delete-btn' onClick={()=>{removeItemFromCart(prod._id) ; setSuccess(true) ;setTimeout(()=>{
setSuccess(false)
},1000) ;setReload(!reload) }}  >Remove item</button>

        
                        </div>   
                           
                     
                       
                      </div>
                    
                    </div>
                    
                   
                )
            })}
     
      </div>
      );
}

   
const loadCheckOut=()=>{
return(
    <div>
        This is checkout section
    </div>
)
}

const deleteMessage=()=>{
    if(success){
      return (
          <div className="error"> Removed item!!</div>
      )
  }
  }

  useEffect(()=>{
    deleteMessage()
  },[success])


    return(
        <Base title="My Cart" description="Ready to checkout">
            {deleteMessage()}
            
        
          <div className="cardrow">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6"><StripeCheckout 
        products={products}
        setReload={setReload}
        /></div>
      </div>
       
      </Base> 
    )
}
export default Cart;