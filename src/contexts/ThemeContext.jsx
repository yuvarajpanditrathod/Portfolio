import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Initialize from the document class (set by inline script) to avoid flicker
  const prefersDarkNow = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  const [darkMode, setDarkMode] = useState(prefersDarkNow);

  // Keep the document class and localStorage in sync
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // ignore storage errors (e.g., private mode)
    }
  }, [darkMode]);

  // Also apply inline background and text color to body and #root so the entire page reflects theme
  useEffect(() => {
    try {
      const body = document.body;
      const root = document.getElementById('root');
      const appRoot = document.getElementById('app-root');
      if (darkMode) {
        if (body) { body.style.backgroundColor = '#0b1220'; body.style.color = '#f8fafc'; }
        if (root) { root.style.backgroundColor = '#0b1220'; root.style.color = '#f8fafc'; }
        if (appRoot) { appRoot.style.backgroundColor = '#0b1220'; appRoot.style.color = '#f8fafc'; }
      } else {
        if (body) { body.style.backgroundColor = '#ffffff'; body.style.color = '#0f172a'; }
        if (root) { root.style.backgroundColor = '#ffffff'; root.style.color = '#0f172a'; }
        if (appRoot) { appRoot.style.backgroundColor = '#ffffff'; appRoot.style.color = '#0f172a'; }
      }
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  // Respond to system preference changes
  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      try {
        const stored = localStorage.getItem('theme');
        // If user hasn't explicitly chosen a theme, follow system
        if (!stored) {
          setDarkMode(e.matches);
        }
      } catch (err) {
        // ignore
      }
    };
    // Some browsers use addEventListener
    if (media.addEventListener) media.addEventListener('change', onChange);
    else if (media.addListener) media.addListener(onChange);

    return () => {
      if (media.removeEventListener) media.removeEventListener('change', onChange);
      else if (media.removeListener) media.removeListener(onChange);
    };
  }, []);

  // Respond to storage events (sync across tabs)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'theme') {
        if (e.newValue === 'dark') setDarkMode(true);
        else if (e.newValue === 'light') setDarkMode(false);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const value = {
    darkMode,
    toggleTheme,
    setDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
