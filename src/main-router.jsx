import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Services from './components/services.jsx'
import Projects from './components/projects.jsx'
import Layout from './components/layout.jsx'

const MainRouter = () => {
return (<div>

<Routes>
    <Layout/>
 <Route  path="" element={<Home />} />
 <Route  path="/about" element={<About />} />
 <Route  path="/projects" element={<Projects/>} />
 <Route  path="/services" element={<Services />} />
 <Route  path="/contact" element={<Contact />} />
  

 </Routes>
</div>
 )
}
export default MainRouter
