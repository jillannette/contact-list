import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddContact from './AddContact'
import Home from './Home'
import CoverImage from './CoverImage'
import ContactList from './ContactList'


function App () {
  return (
    <>
    <div className="App">
    <Home />
    
    </div>
   
    <Routes>
      <Route path="/" element={<CoverImage />}></Route>
      <Route path="/contactList" element={<ContactList />} />
      <Route path="/addContact" element={<AddContact />} />
    
    </Routes>   
    
         
 </>
   
    )
} 
   
    
    export default App   
