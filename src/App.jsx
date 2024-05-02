import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import OurPeople from './pages/OurPeoplePage/OurPeoplePage';
import Inicio from './pages/HomePage/HomePage';
import ContactUs from './pages/ContactUsPage/ContactUsPage';



export function App() {
 return(
    <div>
   <NavBar /> {}
   <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobre-nosotros" element={<OurPeople />} />
        <Route path="/contacto" element={<ContactUs />} />
      </Routes>   
    </div>
 )
}

export default App