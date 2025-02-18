
import React from 'react'

async function ProductId({params,}:{
  params:Promise<{productId:string}>
}) {
  const productId= (await params).productId;
  return (
    <h1>Details about of product Id :{productId}</h1>
  )
}

export default ProductId