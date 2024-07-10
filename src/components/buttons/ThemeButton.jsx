import { useState, useEffect } from 'react';

const ThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  if (typeof window !== 'undefined') {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light');
      });
  } else {
    setTheme('light');
  }

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button
      className="py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-yellow-300 dark:hover:bg-yellow-200 dark:text-black rounded-lg sm:w-full md:w-auto lg:w-auto xl:w-auto"
      onClick={handleTheme}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeButton;
