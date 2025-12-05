import { useEffect, useState } from 'react'
import styles from './ThemeSwitcher.module.css'

type Theme = 'light' | 'dark'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    
    setTheme(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      className={styles.switcher}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Current theme: ${theme}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
