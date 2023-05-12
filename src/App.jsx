import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import HomePage from './components/HomePage/Home'
import BookPage from './components/BookPage/BookPage'
import UserPage from './components/UserPage/UserPage'
import BookDetails from './components/BookDetails/BookDetails'
import UserDetails from './components/UserDetails/userDetails'
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <Router>

     <NavBar/>

    <Routes>

      {/* HomePage */}
       <Route path='/' element={<HomePage/>} />

      {/* BookPage */}
       <Route path='/bookpage' element={<BookPage/>} />

      {/* UserPage */}
       <Route path='/userpage' element={<UserPage/>} />

      {/* BookDetails */}
       <Route path='/bookdetailse' element={<BookDetails/>} />

       {/* BookDetails */}
       <Route path='/userdetailse' element={<UserDetails/>} />

      </Routes>
    </Router>
  )
}

export default App
