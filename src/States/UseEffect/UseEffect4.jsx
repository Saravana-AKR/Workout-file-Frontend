import React, { useEffect, useState } from 'react'

const UseEffect4 = () => {

    const [randomNumber, setRandomNumber] = useState(0);
    const [effectsLogs, setEffectsLogs] = useState([]);


    useEffect(() => {
      
          setEffectsLogs(prevState =>[...prevState,'effects fn has been created'])
      
    }, [randomNumber])
    

  return (
    <>
        <h1> {randomNumber} </h1>
        <button onClick={()=> setRandomNumber(Math.random())}>Generate random number!</button>

        <div>
          
            {effectsLogs.map((value, index)=>{
                    return    <div key={index}>{'🍁'.repeat(index) + value}</div>
            })}
        </div>
    </>
  )
}

export default UseEffect4