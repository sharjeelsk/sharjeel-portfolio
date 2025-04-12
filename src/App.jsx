import React from 'react'
import Hero from './sections/hero/Hero'
import Skills from './sections/skills/Skills'

import "./styles/main.scss"

export default function App() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className="content">
        <Hero />
        <Skills />
      </div>
    </>
  )
}
