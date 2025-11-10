import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import Mainlayout from './components/mainlayout.jsx'
import Signup from './components/signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>  
      <div>
        <BrowserRouter> 
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/mainlayout" element={<Mainlayout />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
