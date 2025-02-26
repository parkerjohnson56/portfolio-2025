import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get initial value from localStorage
    const savedMode = localStorage.getItem('isDark');
    if (savedMode !== null) {
      setIsDark(JSON.parse(savedMode));
    }
  }, []);

  const toggleDark = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('isDark', JSON.stringify(newMode));
  };

  return { isDark, toggleDark };
} 
//testing github push