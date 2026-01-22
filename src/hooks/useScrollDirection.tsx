import { useEffect, useState } from 'react'

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastY = window.pageYOffset

    const update = () => {
      const y = window.pageYOffset
      if (y < lastY) setDirection('up')
      else setDirection('down')

      lastY = y > 0 ? y : 0
    }

    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return direction
}
