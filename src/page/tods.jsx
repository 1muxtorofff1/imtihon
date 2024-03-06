import React, { useEffect, useState } from 'react'
import axios_instances from '../Services/Axios'
import {useNavigate , useParams} from 'react-router-dom'
 export default function tods() {
  const [data, setData] = useState([])
  const [error, seteror] = useState(null)
  const navigate = useNavigate()
  const route = useParams()

   useEffect (() => { 
    axios_instances.get(`posts/${route?.id}`)
    .then(res => setData(res.data))
    .catch(err => seteror(err.message))
  },
   [])
   console.log(data)
   
   
  return (
    <div>
      <center>
      <p className='mt-20 p1 text-red-400' onClick={() => navigate(`/post/${data.id}`)}>{data.title}</p>
          <p className='mt-5 p2 text-green-700'>{data.body}</p>
          <p className='mt-5 p3 text-yellow-700' onClick={() => navigate(`/users/${data.userId}`)}>{data.userId}</p>
          </center>
    </div>
  )
}