import React, { useEffect, useState } from 'react'
import axios_instances from '../Services/Axios'
import {useNavigate , useParams} from 'react-router-dom'
 export default function Comp() {
  const [data, setData] = useState([])
  const [error, seteror] = useState(null)
  const navigate = useNavigate()
  const route = useParams()

   useEffect (() => { 
    axios_instances.get(`users/${route?.id}`)
    .then(res => setData(res.data))
    .catch(err => seteror(err.message))
  },
   [])
   console.log(data)
   
   
  return (
    <div className='bg-yellow-200'>
      <div key={data.id} className='w-full mb-10 pt-[25px]'>
        <center>
          <p className='text-red-400'>ID: {data.id}</p>
          <p className='mt-3 text-yellow-400' >Name: {data.name}</p>
          <p className='mt-3 text-yellow-400'>Username: {data.username}</p>
          <p className='mt-3 text-yellow-400'>email: {data.email}</p>
          <p className='mt-3 text-green-400'>Street: {data.address?.street}</p>
          <p className='mt-3 text-green-400'>Suite: {data.address?.suite}</p>
          <p className='mt-3 text-green-400'>City: {data.address?.city}</p>
          <p className='mt-3 text-green-400'>ZipCode: {data.address?.zipcode}</p>
          <p className='mt-3 text-blue-700'>Phone: {data.phone}</p>
          <p className='mt-3 text-blue-700'>Website: {data.website}</p>
          <p className='mt-3 text-black'>Name: {data.company?.name}</p>
          <p className='mt-3 text-black'>Catch: {data.company?.catchPhrase}</p>
          <p className='mt-3 text-black'>BS: {data.company?.bs}</p>
        </center>
      </div>
    </div>
  )
}