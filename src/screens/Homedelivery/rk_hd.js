import React from 'react'
import './rk_hd.css'
import {useCart } from "react-use-cart";


const Homed = () => {
   
        const {
          isEmpty,
          totalUniqueItems,
          items,
          updateItemQuantity,
          removeItem,
          emptyCart
        } = useCart();
      
        if (isEmpty)
         return <p className='para'>Your cart is empty</p>;
      
        return (
          <>
            <h1 className='he'>My Cart [{totalUniqueItems}]</h1>
            <button className='cl' onClick={() => emptyCart()}>Clear All</button>
            <div className='tlc'>
              {items.map((item) => (
                <div className='fcart' key={item.index}>
                   <img className="Randomimg" src={item.img} alt='sample'/> 
                   <h4 className='hr'>{item.Foodname}</h4>
                   <h4 className='hre'>₹{item.price} </h4>
                   <button className='bse'
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                   [{item.quantity}]
                  
                  <button className='bso'
                    onClick={() => updateItemQuantity(item.id,item.quantity + 1)}
                  >
                    +
                  </button>
                  <button className='blast' onClick={() => removeItem(item.id)}>&times;</button>
                </div>
              ))}
            </div>
          </>
        );
      }
      
export default Homed;


