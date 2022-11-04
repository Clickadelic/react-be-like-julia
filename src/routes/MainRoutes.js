import React from 'react'
import {Routes, Route}  from 'react-router-dom'

import Home from './Home'
import About from './About'
import Leistungen from './Leistungen'
import Preise from './Preise'
import Kontakt from './Kontakt'
import Error404 from './Error404'

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default MainRoutes