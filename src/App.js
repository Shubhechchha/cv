import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Profile from './components/Profile';



function App() {
  return (
   <Routes>
    
    <Route path="/" element= {<Home/>} />
    <Route path = "/About" element = {<About/>} />
    <Route path = "/Navbar" element = {<Navbar/>} />
    <Route path = "/Education" element = {<Education />} />
    <Route path = "/Experience" element = {<Experience/>} />
    <Route path = "/Skills"  element = {<Skills/>} />
    <Route path = "/Profile" element = {<Profile />} />
    
     

    
   </Routes>
  );
}

export default App;
