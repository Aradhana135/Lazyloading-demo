import React, { useState,useEffect } from 'react'
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Users = () => {
    const [user,setUser]=useState([])
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res)=>{
            setUser(res.data)
        })
    },[])
  return (
    <>
    <div>
    {user.map((data) => {
          return (
            <>
    
                <LazyLoadImage key={data.id}
                  effect="black-and-white"
                  threshold="10"
                  src={data.url}
                  alt=""
                  style={{ width: "250px", height: "200px" }}
                />
                <h4>{data.id} . {data.title}</h4>
            
            </>
          );
        })}
      </div>
    </>
  )
}

export default Users