import React from "react"
import RegistrationForm from "./components/Form"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./components/Welcome";
function App() {


  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
