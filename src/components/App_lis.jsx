import React, { useState } from 'react'
import axios_instances from '../Services/Axios/index.js'

export default function App_list() {
  const [user, setUser] = useState()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const post_data = () => { 
    axios_instances.post("/posts", {
      userId: user,
      title: title,
      body: body,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  function user_id(event){
      setUser(event.target.value)
  }
  function title_1(event){
    setTitle(event.target.value)
  }
  function body_1(event){
    setBody(event.target.value)
  }
  return (
    <div>
<center>
      <select onChange={user_id} name="" className='w-[500px] selc' id="">
                    <option className='op'>1</option>
                    <option className='op'>2</option>
                    <option className='op'>3</option>
                    <option className='op'>4</option>
                    <option className='op'>5</option>
                    <option className='op'>6</option>
                    <option className='op'>7</option>
                    <option className='op'>8</option>
                    <option className='op'>9</option>
                    <option className='op'>10</option>
                </select><br />
                <input className='int1' placeholder='Title' onChange={title_1} type="text" />
                <input className='int2' placeholder='Body' onChange={body_1} type="text" />
                <button className='but1' onClick={post_data}>Soxranit</button>
                </center>
      </div>
  )
}
