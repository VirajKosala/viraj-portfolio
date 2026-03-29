'use client'

import { useEffect, useState } from 'react'

export function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }

    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      className="border-t py-8 shadow-lg transition-all duration-300"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(to right, #111827, #1f2937)' 
          : 'linear-gradient(to right, #ffffff, #eff6ff)',
        borderColor: isDarkMode ? '#374151' : '#bfdbfe',
        boxShadow: isDarkMode 
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' 
          : '0 10px 15px -3px rgba(156, 163, 175, 0.3)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p style={{ color: isDarkMode ? '#f3f4f6' : '#111827' }}>
            © {new Date().getFullYear()} Viraj Kosala Weerathunga. All rights reserved.
          </p>
          <p className="text-sm mt-2" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
