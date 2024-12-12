import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HoverEffect from 'hover-effect'
import img1 from './images/Img10.jpg'
import img2 from './images/Img14.jpg'
import displacement from './images/7.jpg'


function App() {
  const [count, setCount] = useState(0)

  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize HoverEffect
    new HoverEffect({
      parent: containerRef.current, // Container where the effect will be applied
      intensity: 0.9, // Adjust intensity of the effect
      image1: img1, // Path to the first image
      image2: img2, // Path to the second image
      displacementImage: displacement, // Path to the displacement image
    });
  }, []);




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div
      ref={containerRef}
      style={{
        width: "500px",
        height: "300px",
        overflow: "hidden"
      }}
    ></div>
    </>
  )
}

export default App
