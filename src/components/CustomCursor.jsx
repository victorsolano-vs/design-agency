import { useEffect, useRef } from "react"

function CustomCursor() {

  const cursorRef = useRef(null)
  

  useEffect(() => {
      const cursor = cursorRef.current
      

      console.log(cursor)

      const handleMouseMove = (e) => {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }

      const handleMouseEnter = () => {
        cursor.classList.add('scale-up')
      }

      const handleMouseLeave = () => {
        cursor.classList.remove('scale-up')

      }

      const interactiveElements = document.querySelectorAll('a, button')
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      })




      document.addEventListener('mousemove', handleMouseMove)


      // Cleanup event listeners on component unmount
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)

        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        })

      }

  }, [])

  


  return (
    <>
      <div id="customCursor" ref = {cursorRef}>
        <div id='ring' ></div>
        <div id="selector" ></div>
      </div>
    </>
  )
}

export default CustomCursor