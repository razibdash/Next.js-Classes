import { Metadata } from 'next';
import React from 'react'

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

export async function generateMetadata({params,}:Props):Promise<Metadata>{
    const {productId}= (await params)
    return {
      title:`Product ${productId}`
    }
    }
 
const ProductReviews=async({params}:Props)=>{
  const{productId,reviewId}=await params;
  return (
    <h1>Review {productId} for product Id {reviewId}</h1>
  )
}

export default ProductReviews