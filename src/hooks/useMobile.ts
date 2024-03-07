import { useState, useEffect } from 'react'

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth < 767)
  }

  useEffect(() => {
    checkWindowSize()

    window.addEventListener('resize', checkWindowSize)

    return () => {
      window.removeEventListener('resize', checkWindowSize)
    }
  }, [])

  return isMobile
}

export default useResponsive
