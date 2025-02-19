'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const OrderNow = () => {
    const route=useRouter();
    const handleOrder=()=>{
        console.log('order is placing!');
        route.push('/');

    }
  return (
    <div>
        <h1>Order now!</h1>
        <button onClick={handleOrder}>Order</button>
    </div>
  )
}

export default  OrderNow 
