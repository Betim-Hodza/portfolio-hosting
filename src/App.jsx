import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() 
{
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>  
  )
}

export default App
