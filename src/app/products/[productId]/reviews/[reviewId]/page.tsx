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
 const getRandomInt=(count:number)=>{
  return Math.floor(Math.random()*count);
 }
const ProductReviews=async({params}:Props)=>{
  const{productId,reviewId}=await params;
  const random=getRandomInt(2);
  if(random===1){
    throw new Error('error loading review!');
  }
  return (
    <h1>Review {productId} for product Id {reviewId}</h1>
  )
}

export default ProductReviews