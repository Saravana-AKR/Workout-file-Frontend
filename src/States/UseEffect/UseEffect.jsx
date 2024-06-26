import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    // const [count , setCount] = useState(0);

    const [position, setPosition] = useState({
        x:0,
        y:0
    })

    useEffect(() => {
      const handleMove = (e)=>{
              setPosition(
                {
                    x: e.clientX,
                    y: e.clientY
                }
              )
      }
      window.addEventListener('pointermove',handleMove);
    
      return () => {
        window.removeEventListener('pointermove',handleMove);
      }
    }, [])

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //       setCount(count => count + 1)
    //   }, 1000);
    
    //   return () => {
    //     clearInterval(intervalId)
    //   }
    // }, [])
    
    // console.log(count);

  return (
    <>

         <h1> useEffect works in Browser API</h1>
       
       <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />

    {/* <h1>{count}</h1> */}

    </>
  )
}

export default UseEffect