import React from 'react'
import Nevbar from './Nevbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './Page';
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './Add';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Nevbar />
      {/* <Page/> */}
      

      <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/Add' element={<Add/>}/>
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App