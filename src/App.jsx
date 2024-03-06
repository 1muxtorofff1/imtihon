import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"
import Comp from "./page/Comp.jsx"
import Add_post from './components/App_lis.jsx'
import tods from './page/tods.jsx';
export default function App() {
  return (
    <div className='big_div'>
      <center>
      <div className='bigs'><Link className='home_link' to='/'>
        Home
        </Link>
        <Link className='add_link' to='/add_post'>
          Add post
        </Link>
        </div>
        </center>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/post/:id' Component={tods}/>
      <Route path='/users/:id' Component={Comp}/>
      <Route path='/add_post' Component={Add_post}/>
    </Routes>
    
    </div>
  )
}
