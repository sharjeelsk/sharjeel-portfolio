import React from 'react'
import Hero from './sections/hero/Hero'
import Skills from './sections/skills/Skills'


import "./styles/main.scss"
import Timeline from './sections/timeline/Timeline'
import Contact from './sections/contact/Contact'
import CustomCursor from './components/CustomCursor/CustomCursor'

export default function App() {
  return (
    <>
    {/* <CustomCursor /> */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className="content">
        <Hero />
        <Skills />
        <Timeline />
        <Contact />
      </div>
    </>
  )
}
