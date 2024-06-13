import React, { useState } from 'react'
import Post from './Post';

const UseEffect3 = () => {


     const [show, setShow] = useState(false);

     const showPost = ()=>{
         setShow(!show);
     }


  return (
    <>
    
      <div>
        <button onClick={showPost}>Show Posts</button>
                  <h2>{show && <Post/>}</h2>
      </div>
    
    </>
  )
}

export default UseEffect3