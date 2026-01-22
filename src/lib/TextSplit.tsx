'use client'

import { useEffect } from 'react'
import SplitType from 'split-type'

export default function TextSplit() {
  useEffect(() => {
    // avoid FOUC
    document.querySelectorAll('[data-text-split]').forEach((el) => {
      ;(el as HTMLElement).style.opacity = '1'

      new SplitType(el as HTMLElement, {
        types: 'words,chars',
        tagName: 'span',
      })
    })
  }, [])

  return null
}
