import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '/components/Home.jsx'
import About from './src/about.jsx'
import Contact from './src/contact.jsx'
import Services from './src/services.jsx'
import Projects from './src/projects.jsx'
import Layout from './components/layout.jsx'
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
<Route  path="/" element={<Home />} />
<Route  path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route  path="/projects" element={<Projects />} />
<Route  path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter

