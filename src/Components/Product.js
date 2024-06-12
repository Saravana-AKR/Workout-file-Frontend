import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import products from '../Components/ProductList'
import ProductPage from './ProductPage';


const Product = () => {

   const [list, setList] = useState(products);

    const navigate = useNavigate();

  return (
    <>
      <div className="product-header">
        <div className="sub-menu">
        <nav style={{"BsBreadcrumbDivider": '">"'}} aria-label="breadcrumb">
          <ol className="breadcrumb">
             <li className="breadcrumb-item"><Link onClick={()=>navigate(-1)}>Back</Link></li>
             <li className="breadcrumb-item active" aria-current="page">Product</li>
          </ol>
       </nav>

        </div>
        <div className="product-main">
             product page
             <div className="product-section">
              {list && list.map((prod,index)=>{
                 return (
                  
                     <article key={index}>
                      <h2>{prod.name}</h2>
                      <Link to={`/product/${prod.id}`} className='btn btn-primary text-white px-3'> More info</Link>
                     </article>
                  
                 )
              })}
             </div>
        </div>
    </div>
    </>
  )
}

export default Product