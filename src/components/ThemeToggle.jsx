import { useEffect, useState } from 'react';
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try { const saved = localStorage.getItem('theme'); if (saved === 'light' || saved === 'dark') return saved; } catch { /* Storage can be unavailable in private contexts. */ }
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* The palette still works without persistent storage. */ }
  }, [theme]);
  return <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} aria-pressed={theme === 'dark'} onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')}>
    <span className="theme-sky" aria-hidden="true"><span className="theme-orb" /><span className="theme-cloud" /></span>
  </button>;
}
