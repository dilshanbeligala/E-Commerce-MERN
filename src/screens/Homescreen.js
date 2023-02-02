import React from 'react'
import products from  '../product'

export default function Homescreen() {
  return (
    <div>
        <div className='row justify-content-center'>
            {products.map(product=>{
                return <div className='col-md-3 m-5 card p-2'>
                    <img src={product.image} className='img-fluid'></img>
                    <h1>{product.name}</h1>
                    
                    <h1>Rating : {product.rating}</h1>
                    <h1>Price : {product.price}</h1>
                </div>
            })}
        </div>
    </div>
  )
}
