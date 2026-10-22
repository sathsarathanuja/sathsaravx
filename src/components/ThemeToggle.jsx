import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

const themes = ['dark', 'light', 'system']
const icons = { system: Monitor, light: Sun, dark: Moon }

const readTheme = () => {
  try {
    const saved = window.localStorage.getItem('theme')
    return themes.includes(saved) ? saved : 'dark'
  } catch {
    return 'dark'
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && mediaQuery.matches)
      document.documentElement.classList.toggle('dark', isDark)
      document.documentElement.dataset.theme = theme
      document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    }
    applyTheme()
    try { window.localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
    mediaQuery.addEventListener('change', applyTheme)
    return () => mediaQuery.removeEventListener('change', applyTheme)
  }, [theme])

  const next = themes[(themes.indexOf(theme) + 1) % themes.length]
  const Icon = icons[theme]

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="navbar-icon-button"
      aria-label={`Theme: ${theme}. Switch to ${next}`}
      title={`Theme: ${theme}`}
    >
      <Icon size={16} />
    </button>
  )
}
