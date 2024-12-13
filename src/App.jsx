import { useState } from 'react'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <CustomCursor/>
    <NavBar/>
    <Hero/>



    </>
  )
}

export default App
