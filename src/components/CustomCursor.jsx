import { useEffect, useRef } from "react"

function CustomCursor() {

  // const cursorRef = useRef(null)
  // const cursorSelectorRef = useRef(null)
  

  // useEffect(() => {
  //     const cursor = cursorRef.current
  //     const cursorSelector = cursorSelectorRef.current

  //     const handleMouseMove = (e) => {
  //       cursor.style.left = `${e.clientX}px`
  //       cursor.style.top = `${e.clientY}px`
  //     }

  //     const handleMouseEnter = () => {
  //       cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  //       cursor.style.background = 'white';
  //       cursor.style.mixBlendMode = 'difference';

  //       cursorSelector.classList.add('selectorHover')

  //     }

  //     const handleMouseLeave = () => {
  //       cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  //       cursor.style.mixBlendMode = 'normal';
  //       cursor.style.background = 'transparent';

  //       cursorSelector.classList.remove('selectorHover')

  //     }

  //     const interactiveElements = document.querySelectorAll('a, button, .morphContainer')
  //     interactiveElements.forEach((element) => {
  //       element.addEventListener('mouseenter', handleMouseEnter)
  //       element.addEventListener('mouseleave', handleMouseLeave)
  //     })




  //     document.addEventListener('mousemove', handleMouseMove)


  //     // Cleanup event listeners on component unmount
  //     return () => {
  //       document.removeEventListener('mousemove', handleMouseMove)

  //       interactiveElements.forEach((element) => {
  //         element.removeEventListener('mouseenter', handleMouseEnter);
  //         element.removeEventListener('mouseleave', handleMouseLeave);
  //       })

  //     }

  // }, [])

  const cursorRef = useRef(null)
  const borderRef = useRef(null)
  const customCursorRef = useRef(null)
  const position = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const border = borderRef.current
    const customCursor = customCursorRef.current

    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleMouseEnter = () => {
        border.style.transform = 'translate(-50%, -50%) scale(0.8)';
        border.style.background = 'white';
        border.style.mixBlendMode = 'difference';
        border.style.border = 'none'

        cursor.style.opacity = '0'
        customCursor.style.mixBlendMode = 'difference'
      }

    const handleMouseLeave = () => {
      border.style.transform = 'translate(-50%, -50%) scale(1)';
      border.style.mixBlendMode = 'normal';
      border.style.background = 'transparent';
      border.style.border = '1px solid black'


      cursor.style.opacity = '1'
      customCursor.style.mixBlendMode = 'normal'
      }

    const handleMouseUp = () => {
      border.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    const handleMouseDown = () => {
      border.style.transform = 'translate(-50%, -50%) scale(0.1)';
      }


      const interactiveElements = document.querySelectorAll('a, button, .morphContainer')
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      })


    const updateBorderPosition = () => {
      position.current.x += (targetPosition.current.x - position.current.x) * 0.2
      position.current.y += (targetPosition.current.y - position.current.y) * 0.2

      border.style.left = `${position.current.x}px`
      border.style.top = `${position.current.y}px`

      requestAnimationFrame(updateBorderPosition)
    }


    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    requestAnimationFrame(updateBorderPosition)

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      })
    }
  }, [])

  


  return (
    <>   
      <div className="customCursor" ref = {customCursorRef}>
        <div className = "cursorDot" ref = {cursorRef}></div>
        <div className="cursorBorder" ref={borderRef}></div>
      </div>
    </>
  )
}

export default CustomCursor