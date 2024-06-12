import React, { useState, version } from 'react'





const createInitialTodo = ()=>{
    const initialState = [];
    for (let i = 0; i < 5; i++) {
        initialState.push({
            id: i,
            text: 'Item' + (i + 1)
        })
    }
    return initialState;
}

function Form(){
    const [name, setname] = useState('');
    return(
        <>
        <input type="text"  value={name} onChange={(e)=> setname(e.target.value)}/>
        <p>hello, {name}.</p>
        </>
    )
}

const UseState = () => {

    const [count, setCount]  = useState(0);

    const [form, setForm] = useState({
        name:"",
        email:"",
        address:""
    });

    const [todo, setTodo] = useState(createInitialTodo);
    const [text, setText] = useState('');

    const [version, setVersion] = useState(0);

    const handleReset = ()=>{
        setVersion(version + 1);
    }


    console.log(todo);
    console.log(form);

    const increment= ()=>{
        setCount(count + 1);
    }
    const decrement= ()=>{
        setCount(count - 1);
    }
    const reset= ()=>{
        setCount(0);
    }

    const incrementByUpdater = ()=>{
        setCount(count => count + 1)
    }
    const decrementByUpdater = ()=>{
        setCount(count => count - 1)
    }
    const resetByUpdater = ()=>{
        setCount(0)
    }

    const onSubmit = ()=>{
        const {name,email,address} = form;
         const result = {
            name : name,
            email : email,
            address : address
         };

         const myArray = Object.values(result)
         return alert(myArray)
    }

    


  return (
    <>
         <h1>State Format</h1>
            <hr/>
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
                <h2>Updating state based on the previous state</h2>
                <div className="row">
                    <div className="col">
                        {count}
                    </div>
                    <div className="col">
                        <div className='my-3'>
                            <button  onClick={()=>{incrementByUpdater();incrementByUpdater();incrementByUpdater();}}> Increment By Updater Function</button>
                        </div>
                        <div className='my-3'>
                            <button onClick={()=>{decrementByUpdater();decrementByUpdater();decrementByUpdater();}}> Decrement By Updater Function</button>
                        </div>
                        <div className='my-3'>
                            <button  onClick={()=>{resetByUpdater();}}> Reset By Updater Function</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <h2>Form (object)</h2>
                <div className="row">
                    <div className="col">
                        <div className='my-3'>
                        <label htmlFor="name" className='pe-3'> Name</label>
                        <input type="text" id='name' onChange={(e)=> setForm({...form,name:e.target.value})} />
                        </div>
                        <div className='my-3'>
                        <label htmlFor="email" className='pe-3'>Email</label>
                        <input type="email" id='email'onChange={(e)=> setForm({...form,email:e.target.value})} />
                        </div>
                         <div className='my-3'>
                         <label htmlFor="address" className='pe-3'> Address</label>
                         <input type="text" id='address' onChange={(e)=>setForm({...form,address:e.target.value})} />
                         </div>
                    </div>
                    <div className="col">
                          <button onClick={()=>onSubmit()}> Submit </button>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="container">
                    <h1>Avoiding recreating the initial state </h1>
                <div className="row">
                    <div className="col">
                         <ul>
                            {todo.map((value,index)=>{
                                return <li key={index}>
                                       <h4>{value.text}</h4>
                                </li>
                            })}
                         </ul>
                    </div>
                    <div className="col">
                         <div className='my-3'>
                             <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='me-3' />
                             <button onClick={()=>{
                                setText('');
                                setTodo(
                                    [
                                        {
                                            id: todo.length,
                                            text: text
                                        },...todo
                                    ]
                                )
                             }}>Add the List</button>
                         </div>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="container">
                <h2>Reset</h2>
                <div className="row">
                    <div className="col">
                         <Form key={version}/>
                    </div>
                    <div className="col">
                        <button onClick={()=>handleReset()}>Reset</button>
                    </div>
                </div>
            </div>
            <hr/>

            


    </>
  )
}

export default UseState