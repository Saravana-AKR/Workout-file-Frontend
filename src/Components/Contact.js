import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Contact = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="contact-header">
        <div className="sub-menu">
        <nav style={{"BsBreadcrumbDivider": '">"'}} aria-label="breadcrumb">
          <ol className="breadcrumb">
             <li className="breadcrumb-item"><Link onClick={()=>navigate(-1)}>Back</Link></li>
             <li className="breadcrumb-item active" aria-current="page"> Contact</li>
          </ol>
       </nav>

        </div>
        <div className="contact-main">
             Contact page
        </div>
    </div>
    </>
  )
}

export default Contact