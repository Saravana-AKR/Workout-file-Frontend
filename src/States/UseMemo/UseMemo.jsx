import React, { useMemo, useState } from 'react'


const UseMemo = () => {


      const [number,setNumber] =  useState(0)

        const cubNum = (num)=>{
            console.log('calculation is done!!!');
            return Math.pow(num,3)
        }

        const result = useMemo(()=>{ return cubNum(number)},[number]) ;

      const [count, setCount] =  useState(0);

            const increment= ()=>{
                setCount(count + 1);
                console.log('parent-components 1');
            }
            const decrement= ()=>{
                setCount(count - 1);
                console.log('parent-components 2');

            }
            const reset= ()=>{
                setCount(0);
                console.log('parent-components 3');

            }

         

  return (
    <>

            <div className="container">
                <h3>Simple Counter</h3>
                <div className="row my-5">
                    <div className="col">
                        {count}
                    </div>
                    <div className="col">
                           <div className='my-3'>
                            <button onClick={increment}> Increase </button>
                           </div>
                           <div className='my-3'>
                            <button onClick={decrement}> Decrease </button>
                           </div>
                           <div className='my-3'>
                            <button onClick={reset}> Reset </button>
                           </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <h3>Number of Cube</h3>
                <div className="row my-5">
                    <div className="col">
                        <div className='my-3'>
                      <input type="number"  onChange={(e)=> setNumber(e.target.value)} className='mt-3'/>
                        </div>
                    </div>
                    <div className="col">
                           <div className='my-3'>
                            <h1>cube of the Number : {result}</h1>
                           </div>
                          
                    </div>
                </div>
            </div>
           

    
    </>
  )
}

export default UseMemo