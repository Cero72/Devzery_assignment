import './App.css';
import EmailVerify from './Components/EmailVerify';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import React from 'react';
import {  Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
     <Routes>
     <Route exact path="/" element={<SignUp />} />
     <Route exact path="/login" element={<Login />} />
     <Route exact path="/email" element={<EmailVerify />} />
      </Routes>
    </>
  );
}

export default App;
