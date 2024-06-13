import React, { useEffect, useState } from 'react'

const Post = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

          fetch(`https://jsonplaceholder.typicode.com/posts`,{signal:signal})
          .then((res)=> res.json())
          .then((res)=> setPosts(res))
          .catch((err)=> {
            if (err.name === "AbortError") {
                console.log("successfully aborted");
              } else {
                setError(err);
              }
          });
          return ()=> controller.abort();
    }, [])
    console.log(posts);
    

  return (
    <>
       {!error ?
       (
        posts.map((post,index)=>{
               const shortTitle = post.title.substring(0,20);
            return (<ul key={index}> <li>{`${shortTitle}`}</li></ul>)
        })  
       )
       :(<>
         <p>{`${error}...`}</p>
        </>)
        }
    </>
  )
}

export default Post