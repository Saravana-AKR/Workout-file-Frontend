import axios from 'axios';
import React, { useEffect, useState } from 'react'

     const API = 'https://jsonplaceholder.typicode.com/posts'



       //   useEffect cleanup function is not necessary  
       
       function Page({ title }) {
        useEffect(() => {
          document.title = title;
        }, [title]);
        
        return <h1>{title}</h1>;   
      }



const UseEffect2 = () => {

    const [count, setCount] = useState(0);
   
     const OnTrigger = ()=>{
          setCount(count + 1);
     }

     // useEffect re-render sample 

            useEffect(() => {
                
                
                console.log('useEffect render 1');
            
            return () => {
                
            }
            },)
    
     
       // useEffect  stop to re-render sample 

            useEffect(() => {
            
                console.log('useEffect render 2');
            
            return () => {
                
            }
            }, [])
    

         // useEffect  cleanUp  sample 

             useEffect(() => {
                    // set our variable to true
                     let isApiSubscribed = true;
                     axios.get(API).then((response) => {
                     if (isApiSubscribed) {
                      // handle success
                        }
                     });
             
               return () => {
                isApiSubscribed = false;
               };
             }, [])

        
             

  return (
    <>
      <h2>{count}</h2>
      <button onClick={OnTrigger}>Trigger</button>
          
           <h3>{Page}</h3>
    
    </>
  )
}

export default UseEffect2