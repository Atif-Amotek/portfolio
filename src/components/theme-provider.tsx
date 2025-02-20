'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
  enableSystem?: boolean
}

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: 'dark',
  setTheme: () => null,
})

export const ThemeProvider = ({
  children,
  defaultTheme = 'dark', // Changed default theme to dark
  attribute = 'class',
  enableSystem = false, // Disabled system theme by default
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme') as Theme
      if (stored) return stored
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    // Remove both classes first
    root.classList.remove('light', 'dark')

    // Determine the theme to apply
    let appliedTheme = theme

    if (theme === 'system' && enableSystem) {
      appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    // Apply the theme
    root.classList.add(appliedTheme)

    // Store the user's preference
    localStorage.setItem('theme', theme)
  }, [theme, enableSystem])

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, enableSystem])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}