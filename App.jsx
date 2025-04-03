import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Userlist from './Pages/Userlist';
import Updateuser from './Pages/Updateuser';
import Header from './Components/Header';
 
function App() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
          <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route path='/userlist' element={<Userlist/>}></Route>
              <Route path='/updateuser' element={<Updateuser/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App