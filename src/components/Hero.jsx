import { useEffect, useRef } from 'react'


import HoverEffect from 'hover-effect'
import img1 from '../assets/images/test8.jpg'
import img2 from '../assets/images/test9.jpg'
import displacement from '../assets/images/7.jpg'

function Hero() {

    const containerRef = useRef(null);

    useEffect(() => {
      // Initialize HoverEffect
      new HoverEffect({
        parent: containerRef.current, // Container where the effect will be applied
        intensity: 0.5, // Adjust intensity of the effect
        image1: img1, // Path to the first image
        image2: img2, // Path to the second image
        displacementImage: displacement, // Path to the displacement image
        hover: true
      })

    //   this return stops the canvas from re-rendering for some reason
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '' // Clear all canvas elements
        }
      }

    }, [])


  return (
    
    <section className='heroSection'>
      <div className="heroContent">
        <div className="headingTitle">
              <div
                      className='morphContainer'
                      ref={containerRef}
                      style={{
                          width: "310px",
                          height: "590px",
                          overflow: "hidden"
                      }}
              >
              </div>
              <h1 className='heroTitle'>Vixion Design</h1>
              
          </div>

        <div className="heroText">
              <h3>Digitize your ideas</h3>
              <p>Vixion design prioritizes creating memorable and outstanding web experiences that will leave a stamp on your visitors.</p>
              <a href="#">View our work</a>
            </div>
      </div>


        

        
        
    </section>
    
  )
}

export default Hero