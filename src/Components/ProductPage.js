import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Components/ProductList';



const ProductPage = () => {

  const {productId} = useParams();
  console.log(useParams());
 
    
   const product = products.find((value)=> value.id === productId);
   console.log(product);

  const {name,image} = product;
  
   

  return (
    <div className='product-lists'>
         single product
         <h1>{productId}</h1>
         <h2>{name}</h2>
         <img srcSet={image} alt={name} />
    </div>
  )
}

export default ProductPage