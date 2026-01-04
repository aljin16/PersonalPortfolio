import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 w-16 h-8 rounded-full bg-gray-300 shadow-2xl">
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-16 h-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-1500 overflow-hidden border-[2px] hover:scale-105"
      style={{
        borderColor: theme === 'light' ? '#a5d8ff' : '#4c1d95',
        boxShadow: theme === 'light' 
          ? '0 6px 16px -3px rgba(59, 130, 246, 0.25), 0 6px 6px -3px rgba(59, 130, 246, 0.04)'
          : '0 6px 16px -3px rgba(124, 58, 237, 0.25), 0 6px 6px -3px rgba(124, 58, 237, 0.04)'
      }}
      aria-label="Toggle theme"
    >
      <div className={`relative w-full h-full transition-all duration-1500 ease-in-out ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-200' 
          : 'bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800'
      }`}>
        {/* Toggle circle (Moon in dark mode, Sun in light mode) */}
        <div className={`absolute top-0.5 w-6 h-6 rounded-full shadow-2xl transition-all duration-1500 ease-in-out transform ${
          theme === 'light' 
            ? 'right-0.5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500' 
            : 'left-0.5 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'
        }`}
        style={{
          boxShadow: theme === 'light'
            ? '0 2px 4px -1px rgba(251, 191, 36, 0.3), 0 1px 2px -1px rgba(251, 191, 36, 0.06)'
            : '0 2px 4px -1px rgba(156, 163, 175, 0.3), 0 1px 2px -1px rgba(156, 163, 175, 0.06)'
        }}>
          {/* Sun glow effect */}
          <div className={`absolute inset-0 rounded-full transition-all duration-1500 ${
            theme === 'light' ? 'opacity-100 bg-yellow-200 blur-md scale-110' : 'opacity-0'
          }`}></div>
          
          {/* Moon crater effect */}
          <div className={`absolute inset-0 transition-all duration-1500 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute w-1 h-1 bg-gray-400/30 rounded-full top-1.5 left-1.5"></div>
            <div className="absolute w-0.5 h-0.5 bg-gray-400/20 rounded-full top-2.5 left-2.5"></div>
            <div className="absolute w-1 h-1 bg-gray-400/25 rounded-full top-2 left-3"></div>
          </div>
        </div>

        {/* Layered clouds for light mode */}
        <div className={`absolute left-1 top-2 transition-all duration-1500 ${
          theme === 'light' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          {/* Large cloud 1 */}
          <div className="relative">
            <div className="w-3 h-1.5 bg-white/60 rounded-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-2 h-2 bg-white/70 rounded-full"></div>
            <div className="absolute -top-0.5 left-1.5 w-1.5 h-1.5 bg-white/65 rounded-full"></div>
            <div className="absolute -top-0.5 left-1 w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>

        <div className={`absolute left-3 top-3.5 transition-all duration-1500 delay-150 ${
          theme === 'light' ? 'opacity-90 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          {/* Large cloud 2 */}
          <div className="relative">
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
            <div className="absolute -top-0.5 left-1 w-1 h-1 bg-white/55 rounded-full"></div>
          </div>
        </div>

        <div className={`absolute left-5 top-1 transition-all duration-1500 delay-300 ${
          theme === 'light' ? 'opacity-80 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          {/* Small cloud */}
          <div className="relative">
            <div className="w-1.5 h-1 bg-white/45 rounded-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Layered clouds for dark mode (purple tinted) */}
        <div className={`absolute right-1 top-1 transition-all duration-1500 ${
          theme === 'dark' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {/* Purple cloud 1 */}
          <div className="relative">
            <div className="w-2.5 h-1 bg-purple-400/20 rounded-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-1.5 h-1.5 bg-purple-400/25 rounded-full"></div>
            <div className="absolute -top-0.5 left-1.5 w-1 h-1 bg-purple-400/20 rounded-full"></div>
          </div>
        </div>

        <div className={`absolute right-3 top-2.5 transition-all duration-1500 delay-150 ${
          theme === 'dark' ? 'opacity-90 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {/* Purple cloud 2 */}
          <div className="relative">
            <div className="w-2 h-1 bg-purple-400/15 rounded-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-1 h-1 bg-purple-400/20 rounded-full"></div>
            <div className="absolute -top-0.5 left-1 w-0.5 h-0.5 bg-purple-400/18 rounded-full"></div>
          </div>
        </div>

        <div className={`absolute right-5 top-4 transition-all duration-1500 delay-300 ${
          theme === 'dark' ? 'opacity-80 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {/* Small purple cloud */}
          <div className="relative">
            <div className="w-1.5 h-0.5 bg-purple-400/15 rounded-full"></div>
            <div className="absolute -top-0.5 left-0.5 w-1 h-1 bg-purple-400/18 rounded-full"></div>
          </div>
        </div>

        {/* Stars for dark mode - scattered pattern */}
        <div className={`absolute inset-0 transition-all duration-1500 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Various sized stars */}
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1 left-2 animate-pulse"></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-2 left-4 animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-3 left-3 animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1.5 left-5 animate-pulse" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-4 left-6.5 animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-2.5 left-7.5 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-3.5 left-9 animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-0.5 left-6 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-2.5 left-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-4.5 left-11.5 animate-pulse" style={{animationDelay: '0.8s'}}></div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
