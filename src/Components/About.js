import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UseState from '../States/UseState';

const About = () => {
  
    

   
      
      

    const navigate = useNavigate();
  return (
    <>
    <div className="about-header">
        <div className="sub-menu">
        <nav style={{"BsBreadcrumbDivider": '">"'}} aria-label="breadcrumb">
          <ol className="breadcrumb">
             <li className="breadcrumb-item"><Link onClick={()=>navigate(-1)}>Back</Link></li>
             <li className="breadcrumb-item active" aria-current="page">About</li>
          </ol>
       </nav>

        </div>
        <div className="about-main">
                 <UseState/>
              
        </div>
    </div>
    </>
  )
}

export default About