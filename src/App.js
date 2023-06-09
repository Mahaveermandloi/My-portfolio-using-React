import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './SocialLinks';
import About from './components/About';
import Project from "./components/Project";
import Experience from './components/Experience';
import Contact from './components/Contact';
import Socials from './components/Socials';
import "./index.css";



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact /> 
      <Socials />
      <SocialLinks />
    </>
  )
}

export default App;
