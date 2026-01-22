'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer) // Cleanup timeout
  }, [])

  if (!isLoading) return null // Do not render anything after 2 seconds

  return (
    <div className="bg-brand-100 fixed inset-0 z-1000 flex items-center justify-center">
      <div className="flex flex-col justify-center">
        <div>
          <Image src="/images/loader.png" width={72} height={72} alt="Loader" />
        </div>
        <div className="text-white">Loading...</div>
      </div>
    </div>
  ) // The loading screen
}
