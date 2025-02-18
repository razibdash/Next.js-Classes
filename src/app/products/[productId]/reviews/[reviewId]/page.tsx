import React from 'react'

async function ReviewId({params,}:{
    params:Promise<{productId:string;reviewId:string}>
}) {
    const {productId,reviewId}= (await params)
   
  return (
    <h1>Review {productId} for product Id {reviewId}</h1>
  )
}

export default ReviewId