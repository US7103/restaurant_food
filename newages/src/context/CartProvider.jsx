import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

const CartProvider = ({children}) => {
    const [itemwa,setItemwa]=useState([]);

    const addsToCart=(user)=>{

        setItemwa((prevItem)=>{
            const existing=prevItem.find(item=>item.id===user.id)
            if(existing){
               return prevItem.map((item)=>
                      item.id===user.id ?{...item,quantity:item.quantity+1}:item

                )
            }else{
                return [...prevItem, {...user,quantity:1}]
            }
        })

    }

    const remoToCart=(id)=>{
        setItemwa((prevItem)=>prevItem.filter(item=>item.id!==id))
    }

    const removeToCart=(user)=>{
        setItemwa((prevItem)=>{
            const existing=prevItem.find(item=>item.id===user.id)
            if(!existing){
               return prevItem
            }
            
            if(existing.quantity===1){
                return prevItem.filter(item=>item.id !== user.id)
            }

            return prevItem.map((item)=> item.id===user.id ? {...item,quantity:item.quantity-1}:item)
        })


    
    }

 
    const updateQuantity=(id,price)=>{

        return setItemwa((prevItem)=>
            prevItem.map((item)=>
                item.id===id?{...item,quantity:Math.max(item.quantity+price,1)}:item
            )

        )
        
    }

    const getTotal=()=>{
        return itemwa.reduce(
            (total,item)=> total+(item.price*item.quantity),0
        )

    }

    const getCount=()=>{
        return itemwa.reduce((total,item)=> total+item.quantity,0)
    }
    
  

return (
    <UserContext.Provider value={{addsToCart,remoToCart,removeToCart,updateQuantity,getTotal,getCount,itemwa}} >
        {children}
    </UserContext.Provider>
  )
}

export default CartProvider
