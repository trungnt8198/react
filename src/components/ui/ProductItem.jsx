import React from 'react'

function ProductItem({product}) {
  return (
    <div id={product.id} className="product-item">
        <h2>{product.title}</h2>
        <h3>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h3>
        <p>{product.description}</p>   
    </div>
  )
}

export default ProductItem
