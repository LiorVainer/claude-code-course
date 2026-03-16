'use client'

import { useEffect } from 'react'

const LIGHT_GRADIENT = 'linear-gradient(180deg, #ede8e0 0%, #f8f6f2 20%, #f8f6f2 80%, #ede8e0 100%)'
const DARK_GRADIENT = 'linear-gradient(180deg, #050508 0%, #0e0e1a 20%, #0e0e1a 80%, #050508 100%)'

export default function LandingBackground() {
  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    function applyGradient() {
      const isDark = html.classList.contains('dark')
      body.style.background = isDark ? DARK_GRADIENT : LIGHT_GRADIENT
      body.style.minHeight = '100vh'
    }

    applyGradient()

    // Watch for dark mode changes
    const observer = new MutationObserver(applyGradient)
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })

    return () => {
      observer.disconnect()
      body.style.background = ''
      body.style.minHeight = ''
    }
  }, [])

  return null
}
