import { useEffect, useRef } from 'react'


import HoverEffect from 'hover-effect'
import img1 from '../images/test5.jpg'
import img2 from '../images/test6.jpg'
// import img1 from '../images/img10.jpg'
// import img2 from '../images/img14.jpg'
import displacement from '../images/7.jpg'

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
    <>
    <section className='heroSection'>
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
            <h1 className='heroTitle'>VIXION DESIGN</h1>
        </div>
        
    </section>
    <article>
        {/* <p>en</p> */}
        
    </article>
    </>
  )
}

export default Hero