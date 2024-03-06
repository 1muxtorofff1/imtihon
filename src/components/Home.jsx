import React, { useEffect, useState } from 'react'
import axios_instances from '../Services/Axios'
import {useNavigate} from 'react-router-dom'
import comp from '../page/Comp.jsx'
 export default function Home() {
  const [data, ApiData] = useState([])
  const [error, seteroro] = useState(null)
  const navigate = useNavigate()

   useEffect (() => { 
    axios_instances.get("/posts")
    .then(res => ApiData(res.data))
    .catch(err => seteroro(err.message))
  },
   [])
   console.log(data)

   const results = data.map(e =>{
    return(
      <div key={e.id} className='home_div mt-14'>
        <center>
          <p className=' p1 text-red-400' onClick={() => navigate(`/post/${e.id}`)}>{e.title}</p>
          <p className='p2 mt-5 text-green-700'>{e.body}</p>
          <p className=' p3 mt-5 text-yellow-700' onClick={() => navigate(`/users/${e.userId}`)}>{e.userId}</p>
        </center>
      </div>
    )
   })
  return (
    <div>
      {data.length > 0 ? results : error}
    
    </div>
    
  )
}
