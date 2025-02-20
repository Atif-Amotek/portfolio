'use client'

import { useTheme } from '@/components/theme-provider'
import { useState, useEffect } from 'react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'mx-4 mt-4 rounded-full bg-white/40 shadow-lg backdrop-blur-md dark:bg-neutral-900/30'
          : 'bg-white/20 backdrop-blur-sm dark:bg-neutral-900/10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className={`font-pixel text-lg font-bold text-neutral-900 drop-shadow-sm ${
            !isScrolled ? 'dark:text-white' : 'dark:text-white'
          }`}>
            Atif Khalil
          </a>
          <nav className="hidden space-x-8 md:flex">
            <a 
              href="#experience" 
              className={`group relative font-pixel text-sm text-neutral-900 drop-shadow-sm ${
                !isScrolled ? 'dark:text-white' : 'dark:text-white'
              }`}
            >
              Experience
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#projects" 
              className={`group relative font-pixel text-sm text-neutral-900 drop-shadow-sm ${
                !isScrolled ? 'dark:text-white' : 'dark:text-white'
              }`}
            >
              Projects
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#contact" 
              className={`group relative font-pixel text-sm text-neutral-900 drop-shadow-sm ${
                !isScrolled ? 'dark:text-white' : 'dark:text-white'
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
            <button
              onClick={toggleTheme}
              className={`font-pixel text-sm text-neutral-900 drop-shadow-sm transition-colors hover:text-red-800 ${
                !isScrolled ? 'dark:text-white' : 'dark:text-white'
              } dark:hover:text-red-500`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}