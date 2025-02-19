import React from 'react'

const ProductListLayout = ({
    children,
}:{
    children: React.ReactNode,
}) => {
  return (
    <div>
        {children}
        <h1>Product feature</h1>
    </div>
  )
}

export default ProductListLayout