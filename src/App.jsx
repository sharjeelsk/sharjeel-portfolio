import React from 'react'
import Hero from './sections/hero/Hero'
import Skills from './sections/skills/Skills'


import "./styles/main.scss"
import Timeline from './sections/timeline/Timeline'
import Contact from './sections/contact/Contact'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Projects from './sections/projects/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      once: false,     // whether animation should happen only once
      easing: 'ease-in-out', // optional easing
    });
  }, []);
  return (
<>
  <div className="star-background">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>

  <div className="page-wrapper">
    <Hero />
    <Skills />
    <Timeline />
    <Projects />
    <Contact />
  </div>
</>

  )
}
