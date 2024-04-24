import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Web from './Web';
import HackerEffect from './Hacker';
const Main = ({data,lab}) => {

  return (
    <Routes>
    <Route  path='/' element={<Welcome />}/> 
     <Route  path='/home' element={<Web/>}/>
    {/* <Route  path='/' element={<Web />}/> */}
    {/* <Route path='/hacker' element={<HackerEffect initialText="hello my name is"/>}/> */}
  </Routes>
  )
}

export default Main