import React from 'react'

function ProductItem({product}) {
  return (
    <div id={product.id} className="product-item">
        <h1>{product.title}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>   
    </div>
  )
}

export default ProductItem
